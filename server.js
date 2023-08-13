const express = require('express');
const app = express();
const port = 3000;

function callBack(data) {
    // do whatever with data
    // example data : token=sziTBSOVSsAV50pD84v0s1dnMEpZZ2F6ivqpg
    console.log(data)
}

// Middleware to log the query string parameters
app.use((req, res, next) => {
  const data = req.url.split('?')[1]; // Get everything after the '?'
  if (data) {
    callBack(data)
  }
  next(); // Move to the next middleware/route handler
});

// Route to handle all requests
app.all('*', (req, res) => {
  res.send('');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
