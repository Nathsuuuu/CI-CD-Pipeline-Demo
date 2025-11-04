const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'CI/CD Demo App is running!'
  });
});

app.listen(PORT, () => {
  console.log(`✅ App running at http://localhost:${PORT}`);
});
