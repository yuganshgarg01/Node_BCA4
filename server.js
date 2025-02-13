// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const userInput = req.body.userInput; // Extract the input value from the form data
  res.send(`You entered: ${userInput}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
