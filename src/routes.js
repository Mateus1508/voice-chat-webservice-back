const express = require('express');
const sendTextToAi = require('./config/sendTextToAi');
const routes = express.Router();

routes.post(
    '/send-message', async (req, res) => {
       try {
        const text = req.body.text;
        const result = await sendTextToAi(text);
        res.status(200).json(result);
       }
       catch (err) {
        return res.status(500).json({ error: err.message });
       }
    }
);

module.exports = routes;