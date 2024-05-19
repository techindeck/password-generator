const express = require('express');
const helmet = require('helmet');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

// Use Helmet to set secure HTTP headers
app.use(helmet());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up HTTPS options (ensure you have your SSL certificates)
const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

// Start the server on port 3000 for HTTPS
const PORT = process.env.PORT || 3000;
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
