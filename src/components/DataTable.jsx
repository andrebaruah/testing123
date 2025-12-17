import React from 'react'
import './DataTable.css'

const DataTable = ({ data }) => {
  const getStatusClass = (status) => {
    const statusMap = {
      'Completed': 'status-completed',
      'Pending': 'status-pending',
      'Processing': 'status-processing'
    }
    return statusMap[status] || ''
  }

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.customer}</td>
              <td>{row.product}</td>
              <td>{row.amount}</td>
              <td>
                <span className={`status-badge ${getStatusClass(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

