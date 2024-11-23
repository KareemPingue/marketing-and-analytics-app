const getCampaigns = (req, res) => {
    // Example campaign data
    const campaigns = [
        { id: 1, name: 'Summer Sale', status: 'Active' },
        { id: 2, name: 'Black Friday', status: 'Upcoming' },
    ];
};

const createCampaign  = (req, res) => {
    // Logic to create a new campaign (simplified)
    const { name, status } = req.body;
    const newCampaign = { id: Date.now(), name, status };
    res.json(newCampaign);
};

module.exports = { getCampaigns, createCampaign };