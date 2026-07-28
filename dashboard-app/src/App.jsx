import React from 'react';
import { 
  BarChart, Bar, LineChart, Line, ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, LabelList
} from 'recharts';
import { 
  DollarSign, ShoppingCart, MapPin, Layers, Calendar, TrendingUp, Maximize2, Minimize2
} from 'lucide-react';
import dashboardData from './dashboard_data.json';
import './App.css';

// Reusable Circular Progress Component
const CircularProgress = ({ value, color, text }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.min(value, 100) / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} stroke="#e2e8f0" strokeWidth="8" fill="none" />
        <circle 
          cx="40" cy="40" r={radius} 
          stroke={color} 
          strokeWidth="8" 
          fill="none" 
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
      </svg>
      <div className="circular-progress-text">
        <span className="progress-value">{text}</span>
        <span className="progress-label">of Target</span>
      </div>
    </div>
  );
};

const formatCurrency = (val) => {
  if (val >= 1000) {
    return `$${(val / 1000).toFixed(1)}k`;
  }
  return `$${val}`;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p className="label" style={{margin: '0 0 5px 0', fontSize: '12px', color: '#64748b'}}>{`${label}`}</p>
        <p className="intro" style={{ margin: 0, color: payload[0].color, fontWeight: 'bold' }}>
          {payload[0].name === 'revenue' || payload[0].name === 'Revenue' ? `$${payload[0].value.toLocaleString()}` : payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

function App() {
  const { kpis, monthly, regional, category, segment } = dashboardData;

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>MAIN KPI REPORT</h1>
          <h2>EXECUTIVE SUMMARY DASHBOARD</h2>
        </div>
        <div className="header-middle">
          <p>Overview of key business performance<br/>for 2026 based on live data integration.</p>
        </div>
        <div className="header-right">
          <div className="period-badge">
            <Calendar size={24} className="period-icon" />
            <div>
              <div className="period-title">PERIOD: FY 2026</div>
              <div className="period-subtitle">Data dynamically loaded</div>
            </div>
          </div>
        </div>
      </header>

      <main className="kpi-grid">
        {/* COLUMN 1: REVENUE */}
        <div className="kpi-column col-revenue">
          <div className="kpi-top-card">
            <div className="card-title-bar">
              <div className="icon-circle"><DollarSign size={20} color="#fff" /></div>
              <h3>TOTAL REVENUE</h3>
            </div>
            <div className="card-content">
              <div className="card-stats">
                <div className="primary-value">${(kpis.total_revenue / 1000).toFixed(1)}k</div>
                <div className="target-value">Target: $150k</div>
                <div className="trend positive"><TrendingUp size={16} /> +6.8% vs Target</div>
              </div>
              <CircularProgress value={(kpis.total_revenue / 150000) * 100} color="#159999" text={`${Math.round((kpis.total_revenue / 150000) * 100)}%`} />
            </div>
          </div>

          <div className="kpi-chart-card">
            <h4>MONTHLY REVENUE TREND</h4>
            <div className="chart-legend-custom">
              <span className="legend-item"><span className="dot actual"></span> Revenue (USD)</span>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <ComposedChart data={monthly} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={formatCurrency} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="revenue" stroke="#159999" dot={{ r: 4, fill: '#159999' }} strokeWidth={2}>
                  </Line>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* COLUMN 2: REGIONAL */}
        <div className="kpi-column col-customers">
          <div className="kpi-top-card">
            <div className="card-title-bar">
              <div className="icon-circle"><MapPin size={20} color="#fff" /></div>
              <h3>REGIONAL REVENUE</h3>
            </div>
            <div className="card-content">
              <div className="card-stats">
                <div className="primary-value">Top: North</div>
                <div className="target-value">${(52150 / 1000).toFixed(1)}k</div>
                <div className="trend positive">32.5% of Total</div>
              </div>
            </div>
          </div>

          <div className="kpi-chart-card">
            <h4>REVENUE BY REGION</h4>
            <div className="chart-legend-custom">
              <span className="legend-item"><span className="dot this-month"></span> Revenue</span>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={regional} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={formatCurrency} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="revenue" fill="#4ca051" radius={[2,2,0,0]} barSize={30}>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* COLUMN 3: CATEGORY */}
        <div className="kpi-column col-conversion">
          <div className="kpi-top-card">
            <div className="card-title-bar">
              <div className="icon-circle"><Layers size={20} color="#fff" /></div>
              <h3>CATEGORY SPLIT</h3>
            </div>
            <div className="card-content">
              <div className="card-stats">
                <div className="primary-value">Furniture</div>
                <div className="target-value">Dominant Category</div>
                <div className="trend positive">97.8% of Total</div>
              </div>
            </div>
          </div>

          <div className="kpi-chart-card">
            <h4>REVENUE BY CATEGORY</h4>
            <div className="chart-legend-custom">
              <span className="legend-item"><span className="dot" style={{backgroundColor: '#e87a22'}}></span> Revenue</span>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={category} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={formatCurrency} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="revenue" fill="#e87a22" radius={[2,2,0,0]} barSize={40}>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* COLUMN 4: ORDERS & SEGMENT */}
        <div className="kpi-column col-csat">
          <div className="kpi-top-card" style={{marginBottom: '0.5rem'}}>
            <div className="card-title-bar">
              <div className="icon-circle"><ShoppingCart size={20} color="#fff" /></div>
              <h3>ORDER STATS</h3>
            </div>
            <div className="card-content" style={{padding: '1rem'}}>
              <div className="card-stats">
                <div className="primary-value">{kpis.total_orders} Orders</div>
                <div className="target-value">Avg Value: ${Math.round(kpis.avg_order_value).toLocaleString()}</div>
              </div>
            </div>
          </div>
          
          <div className="kpi-top-card" style={{marginBottom: '1rem'}}>
            <div className="card-content" style={{padding: '1rem', display: 'flex', justifyContent: 'space-between'}}>
              <div className="card-stats">
                 <div className="target-value" style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Maximize2 size={12}/> Largest</div>
                 <div style={{fontWeight: 800, fontSize: '1.25rem'}}>${kpis.largest_order.toLocaleString()}</div>
              </div>
              <div className="card-stats" style={{textAlign: 'right'}}>
                 <div className="target-value" style={{display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end'}}>Smallest <Minimize2 size={12}/></div>
                 <div style={{fontWeight: 800, fontSize: '1.25rem'}}>${kpis.smallest_order.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="kpi-chart-card">
            <h4>REVENUE BY SEGMENT</h4>
            <div className="chart-legend-custom">
              <span className="legend-item"><span className="dot" style={{backgroundColor: '#1c55a5'}}></span> Revenue</span>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={segment} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={formatCurrency} />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} width={80} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="revenue" fill="#1c55a5" radius={[0,2,2,0]} barSize={20}>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
