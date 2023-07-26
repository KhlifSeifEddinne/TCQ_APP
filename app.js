// TCQ/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the 'path' module

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html')); // Serve the 'index.html' file
});
app.get('/assets/dist/css/bootstrap.min.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile('path/to/bootstrap.min.css');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
