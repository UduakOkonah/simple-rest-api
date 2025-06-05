const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');

// Middleware to parse JSON
app.use(express.json());

// Mount item routes
app.use('/items', itemsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
