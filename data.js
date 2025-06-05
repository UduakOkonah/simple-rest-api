// data.js
let items = [
  { id: 1, name: "Item 1", description: "First item" },
  { id: 2, name: "Item 2", description: "Second item" }
];

module.exports = {
  getItems: () => items,
  getItem: (id) => items.find(item => item.id === id),
  addItem: (item) => {
    item.id = Date.now();
    items.push(item);
    return item;
  },
  updateItem: (id, updated) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updated };
      return items[index];
    }
    return null;
  },
  deleteItem: (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  }
};
