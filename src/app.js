const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CI/CD Demo App is running!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app; // For testing