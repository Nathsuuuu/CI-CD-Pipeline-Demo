const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('CI/CD Demo App is running!');
});

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
