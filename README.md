# Simple REST API

A simple REST API with full CRUD functionality using Express.js and an in-memory datastore.

## 📦 Setup

```bash
npm install
npm start
# Simple REST API with Express.js

This is a simple RESTful API built using Node.js and Express. It manages a list of items in-memory (no database).

---

## 🚀 How to Run

1. **Clone the repository**  
   ```bash
   git https://github.com/UduakOkonah/simple-rest-api.git
   cd simple-rest-api

2. Install dependencies
npm install

3. Start the server
npm start

4. The server will start on http://localhost:3000


📬 API Endpoints
All routes are prefixed with /items

🔹 GET /items
Returns all items.

Example Response

json
[
  {
    "id": 1717600000000,
    "name": "Notebook",
    "description": "A college-ruled notebook"
  }
]

🔹 GET /items/:id
Returns a single item by ID.

Example Response

json
{
  "id": 1717600000000,
  "name": "Notebook",
  "description": "A college-ruled notebook"
}

🔹 POST /items
Adds a new item.
Body Example
json

{
  "name": "Pen",
  "description": "Blue ink ballpoint pen"
}
Success Response
json

{
  "id": 1717600123456,
  "name": "Pen",
  "description": "Blue ink ballpoint pen"
}

🔹 PUT /items/:id
Updates an existing item.

Body Example
json

{
  "name": "Red Pen",
  "description": "Updated description"
}

Success Response
json

{
  "id": 1717600123456,
  "name": "Red Pen",
  "description": "Updated description"
}

🔹 DELETE /items/:id
Deletes an item by ID.

Success Response
json

{
  "message": "Item deleted successfully"
}

✅ Features
Built with Express.js

In-memory data storage (no DB needed)

Fully RESTful: GET, POST, PUT, DELETE

Clean code structure with routes separated

Simple error handling

🔬 API Testing
You can test the API using Postman, Thunder Client, or cURL.
A Postman collection is included in the postman/ folder.

📂 Folder Structure
simple-rest-api/
├── data.js
├── index.js
├── routes/
│   └── items.js
├── package.json
├── README.md
└── postman/
    └── Simple_REST_API_Collection.postman_collection.json


🛠 Future Improvements
Add file/database storage

Add unit tests

Add Swagger UI documentation

Add authentication

Screenshots of API tests are available in the /screenshots folder.

👤 Author
Built by Uduakobong Okonah.
Feel free to contribute or suggest improvements.