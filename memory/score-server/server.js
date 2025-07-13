// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 00;

app.use(cors({
  origin: 'https://rvincoy.github.io'
}));

// Or allow all origins (only for local testing)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, JS, JSON)
app.use(express.static('public'));

// Save high scores to highscores.json
app.post('/save-scores', (req, res) => {
  const scores = req.body;
  const filePath = path.join(__dirname, 'public', 'highscores.json');

  fs.writeFile(filePath, JSON.stringify(scores, null, 2), err => {
    if (err) {
      console.error('❌ Error writing to highscores.json:', err);
      return res.status(500).send('Failed to save high scores.');
    }
    console.log('✅ High scores saved to highscores.json');
    res.send('High scores saved successfully!');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://rvincoy.github.io:${PORT}`);
});