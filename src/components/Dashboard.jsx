import React from 'react'
import MetricCard from './MetricCard'
import Chart from './Chart'
import DataTable from './DataTable'
import './Dashboard.css'

const Dashboard = () => {
  const metrics = [
    {
      title: 'Active Users',
      value: '12,345',
      change: '+15.3%',
      trend: 'up',
      icon: '👥'
    },
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: '💰'
    },
    {
      title: 'Orders',
      value: '8,432',
      change: '-5.2%',
      trend: 'down',
      icon: '📦'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.8%',
      trend: 'up',
      icon: '📈'
    }
  ]

  const chartData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
    { month: 'Jul', value: 7000 },
    { month: 'Aug', value: 6500 },
    { month: 'Sep', value: 8000 },
    { month: 'Oct', value: 7500 },
    { month: 'Nov', value: 9000 },
    { month: 'Dec', value: 8500 }
  ]

  const tableData = [
    { id: 1, customer: 'John Doe', product: 'Product A', amount: '$1,234', status: 'Completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Product B', amount: '$2,345', status: 'Pending', date: '2024-01-16' },
    { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: '$3,456', status: 'Completed', date: '2024-01-17' },
    { id: 4, customer: 'Alice Williams', product: 'Product A', amount: '$1,567', status: 'Completed', date: '2024-01-18' },
    { id: 5, customer: 'Charlie Brown', product: 'Product D', amount: '$4,678', status: 'Processing', date: '2024-01-19' },
    { id: 6, customer: 'Diana Prince', product: 'Product B', amount: '$2,789', status: 'Completed', date: '2024-01-20' },
    { id: 7, customer: 'Edward Norton', product: 'Product C', amount: '$3,890', status: 'Pending', date: '2024-01-21' },
    { id: 8, customer: 'Fiona Apple', product: 'Product A', amount: '$1,901', status: 'Completed', date: '2024-01-22' }
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

