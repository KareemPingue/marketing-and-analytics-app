import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        axios.get('/api/analytics/dashboard')
        .then(response => setMetrics(response.data))
        .catch(error => console.error('Error fetching metrics:', error));
    }, []);

    return (
        <div>
          <h2>Marketing Dashboard</h2>
          {metrics ? (
            <div>
              <p>Total Revenue: ${metrics.totalRevenue}</p>
              <p>Total Leads: {metrics.totalLeads}</p>
              <p>Conversion Rate: {metrics.conversionRate}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    };

export default Dashboard;