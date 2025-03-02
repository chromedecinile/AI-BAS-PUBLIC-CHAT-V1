require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY; // Load from environment variable

app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
