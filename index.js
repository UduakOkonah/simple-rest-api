const express = require("express");
const app = express();
const itemsRoutes = require("./routes/items");

app.use(express.json());
app.get("/", (req, res) => res.send("Simple REST API is running"));
app.use("/items", itemsRoutes);

// Error handling
app.use((req, res) => res.status(404).json({ error: "Not Found" }));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
