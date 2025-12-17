import React from 'react'
import './Chart.css'

const Chart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const minValue = Math.min(...data.map(d => d.value))
  const range = maxValue - minValue

  return (
    <div className="chart">
      <div className="chart-bars">
        {data.map((item, index) => {
          const height = range > 0 ? ((item.value - minValue) / range) * 100 : 50
          return (
            <div key={index} className="chart-bar-container">
              <div className="chart-bar-wrapper">
                <div
                  className="chart-bar"
                  style={{ height: `${height}%` }}
                  title={`${item.month}: $${item.value.toLocaleString()}`}
                />
              </div>
              <span className="chart-label">{item.month}</span>
            </div>
          )
        })}
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#3b82f6' }}></span>
          <span>Revenue</span>
        </div>
      </div>
    </div>
  )
}

export default Chart

