const express = require('express');
const router = express.Router();
let items = require('../data');

// GET /items - Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET /items/:id - Get single item by ID
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST /items - Create new item
router.post('/', (req, res) => {
  const { id, name, description } = req.body;
  if (!id || !name || !description) {
    return res.status(400).json({ error: 'id, name, and description required' });
  }

  const exists = items.find(i => i.id === id);
  if (exists) {
    return res.status(400).json({ error: 'Item with this ID already exists' });
  }

  const newItem = { id, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update item
router.put('/:id', (req, res) => {
  const { name, description } = req.body;
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  if (!name || !description) {
    return res.status(400).json({ error: 'name and description required' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);
  res.json({ message: 'Item deleted successfully' });
});

module.exports = router;
