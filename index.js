const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');
app.use('/items', itemsRoutes);


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple REST API');
});

// Mount the items router
app.use('/items', itemsRoutes);

// 404 route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// 500 error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
