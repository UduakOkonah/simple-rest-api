const express = require("express");
const router = express.Router();
const store = require("../data");

// GET /items
router.get("/", (req, res) => {
  res.json(store.getItems());
});

// GET /items/:id
router.get("/:id", (req, res) => {
  const item = store.getItem(parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST /items
router.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: "Missing fields" });
  const newItem = store.addItem({ name, description });
  res.status(201).json(newItem);
});

// PUT /items/:id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updated = store.updateItem(id, req.body);
  if (!updated) return res.status(404).json({ error: "Item not found" });
  res.json(updated);
});

// DELETE /items/:id
router.delete("/:id", (req, res) => {
  const deleted = store.deleteItem(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Item not found" });
  res.json(deleted);
});

module.exports = router;
