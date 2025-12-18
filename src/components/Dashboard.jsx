import React from 'react'
import MetricCard from './MetricCard'
import Chart from './Chart'
import DataTable from './DataTable'
import './Dashboard.css'

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$127,850',
      change: '+32.5%',
      trend: 'up',
      icon: '💰'
    },
    {
      title: 'Active Users',
      value: '28,947',
      change: '+18.7%',
      trend: 'up',
      icon: '👥'
    },
    {
      title: 'Orders',
      value: '15,623',
      change: '+12.4%',
      trend: 'up',
      icon: '📦'
    },
    {
      title: 'Conversion Rate',
      value: '5.67%',
      change: '+4.1%',
      trend: 'up',
      icon: '📈'
    }
  ]

  const chartData = [
    { month: 'Jan', value: 8500 },
    { month: 'Feb', value: 9200 },
    { month: 'Mar', value: 11000 },
    { month: 'Apr', value: 10500 },
    { month: 'May', value: 12500 },
    { month: 'Jun', value: 11800 },
    { month: 'Jul', value: 14200 },
    { month: 'Aug', value: 13500 },
    { month: 'Sep', value: 15800 },
    { month: 'Oct', value: 15200 },
    { month: 'Nov', value: 17500 },
    { month: 'Dec', value: 16800 }
  ]

  const tableData = [
    { id: 1, customer: 'John Doe', product: 'Product A', amount: '$3,450', status: 'Completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Product B', amount: '$5,680', status: 'Pending', date: '2024-01-16' },
    { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: '$7,920', status: 'Completed', date: '2024-01-17' },
    { id: 4, customer: 'Alice Williams', product: 'Product A', amount: '$4,250', status: 'Completed', date: '2024-01-18' },
    { id: 5, customer: 'Charlie Brown', product: 'Product D', amount: '$9,150', status: 'Processing', date: '2024-01-19' },
    { id: 6, customer: 'Diana Prince', product: 'Product B', amount: '$6,340', status: 'Completed', date: '2024-01-20' },
    { id: 7, customer: 'Edward Norton', product: 'Product C', amount: '$8,750', status: 'Pending', date: '2024-01-21' },
    { id: 8, customer: 'Fiona Apple', product: 'Product A', amount: '$4,980', status: 'Completed', date: '2024-01-22' }
  ]

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <button className="btn-primary">Export</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="dashboard-section">
          <div className="chart-container">
            <h2>Revenue Overview</h2>
            <Chart data={chartData} />
          </div>
        </div>

        <div className="dashboard-section">
          <div className="table-container">
            <h2>Recent Transactions</h2>
            <DataTable data={tableData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

