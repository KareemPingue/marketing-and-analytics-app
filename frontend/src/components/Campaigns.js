import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('/api/marketing/campaigns')
        .then(response => setCampaigns(response.data))
        .catch(error => console.error('Error fetching capmaigns', error));
    }, []);

    return (
        <div>
          <h2>Active Campaigns</h2>
          <ul>
            {campaigns.map(campaign => (
              <li key={campaign.id}>{campaign.name} - {campaign.status}</li>
            ))}
          </ul>
        </div>
    );
};

export default Campaigns;