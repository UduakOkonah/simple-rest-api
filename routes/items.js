// routes/items.js
const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
} = require('../data');

// GET all items
router.get('/', (req, res) => {
  res.json(getItems());
});

// GET single item
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const item = getItem(id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST new item
router.post('/', (req, res) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Item "name" must be a non-empty string' });
  }

  const newItem = addItem({ name: name.trim() });
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const { name } = req.body;
  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Item "name" must be a non-empty string' });
  }

  const updated = updateItem(id, { name: name.trim() });
  if (!updated) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(updated);
});

// DELETE item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const deleted = deleteItem(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(204).send();
});

module.exports = router;
