# React Dashboard

A modern React dashboard with sample data, featuring metrics cards, charts, and data tables.

## Features

- 📊 Key metrics cards with trend indicators
- 📈 Revenue overview chart
- 📋 Recent transactions table
- 🎨 Modern, responsive UI design
- ⚡ Built with Vite for fast development

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── Dashboard.jsx       # Main dashboard component
  │   ├── Dashboard.css
  │   ├── MetricCard.jsx      # Metric card component
  │   ├── MetricCard.css
  │   ├── Chart.jsx           # Chart component
  │   ├── Chart.css
  │   ├── DataTable.jsx       # Data table component
  │   └── DataTable.css
  ├── App.jsx                 # Root app component
  ├── App.css
  ├── main.jsx               # Entry point
  └── index.css              # Global styles
```

## Sample Data

The dashboard includes sample data for:
- Revenue metrics
- User statistics
- Order information
- Transaction history

All data is hardcoded for demonstration purposes and can be easily replaced with API calls or state management.

