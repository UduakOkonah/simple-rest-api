const express = require('express');
const router = express.Router();
const { getItems, getItem, addItem, updateItem, deleteItem } = require('../data');

// Get all items
router.get('/', (req, res) => {
  res.json(getItems());
});

// Get a single item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = getItem(id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// Add a new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }
  const newItem = addItem({ name, description });
  res.status(201).json(newItem);
});

// Update an item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const updated = updateItem(id, { name, description });
  if (!updated) return res.status(404).json({ message: 'Item not found' });
  res.json(updated);
});

// Delete an item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteItem(id);
  if (!deleted) return res.status(404).json({ message: 'Item not found' });
  res.json({ message: 'Item deleted successfully' });
});

module.exports = router;
