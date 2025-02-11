const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';


app.use(express.json());


if (app.get('env') === 'development') {
    app.set('json spaces', 2); 
}


app.get('/rates', async (req, res) => {
    try {
        const { base } = req.query;
        if (!base) {
            return res.status(400).json({ error: 'Base currency is required' });
        }

        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${base}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching exchange rates' });
    }
});


app.get('/convert', async (req, res) => {
    try {
        const { from, to, amount } = req.query;
        if (!from || !to || !amount) {
            return res.status(400).json({ error: 'Missing required query parameters' });
        }

        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${from}`);
        const rate = response.data.conversion_rates[to];
        if (!rate) {
            return res.status(400).json({ error: 'Invalid currency code' });
        }

        const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
        res.json({ from, to, amount, convertedAmount, rate });
    } catch (error) {
        res.status(500).json({ error: 'Error converting currency' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
