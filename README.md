# Simple REST API with Express.js

This is a simple RESTful API built using Express.js. It performs basic CRUD operations on an in-memory data store.

## 📁 Project Structure

```
project/
├── data.js              # In-memory CRUD logic
├── index.js             # Main server and middleware
├── routes/
│   └── items.js         # RESTful route handlers (newly added)
├── postman/             # Postman collection and test screenshots
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v14 or higher
* npm (Node Package Manager)

### Installation

```bash
git clone <your-repo-url>
cd project-folder
npm install
```

### Running the App

```bash
npm start
```

Server will run at: `http://localhost:3000`

---

## 📡 API Endpoints

All endpoints are under `/items`

### GET `/items`

* Description: Retrieve all items
* Response:

```json
[
  { "id": 123, "name": "Item A" },
  { "id": 124, "name": "Item B" }
]
```

### GET `/items/:id`

* Description: Get a specific item by ID
* Success Response: `200 OK`

```json
{ "id": 123, "name": "Item A" }
```

* Error Response: `404 Not Found`

```json
{ "error": "Item not found" }
```

### POST `/items`

* Description: Add a new item
* Request Body:

```json
{ "name": "New Item" }
```

* Success Response: `201 Created`

```json
{ "id": 125, "name": "New Item" }
```

* Error Response: `400 Bad Request`

```json
{ "error": "Item \"name\" is required" }
```

### PUT `/items/:id`

* Description: Update an item
* Request Body:

```json
{ "name": "Updated Name" }
```

* Success Response: `200 OK`

```json
{ "id": 123, "name": "Updated Name" }
```

* Error Response: `404 Not Found`

```json
{ "error": "Item not found" }
```

### DELETE `/items/:id`

* Description: Delete an item by ID
* Success Response: `204 No Content`
* Error Response: `404 Not Found`

```json
{ "error": "Item not found" }
```

---

## 🧪 Testing with Postman

### Test Steps:

1. Import the `postman/collection.json` into Postman.
2. Use the `localhost:3000` base URL.
3. Run tests for:

   * GET `/items`
   * POST `/items`
   * GET `/items/:id`
   * PUT `/items/:id`
   * DELETE `/items/:id`

### Screenshots:

See the `postman/screenshots/` folder for screenshots of successful test results.

---

## 🛠️ Future Improvements

* Add persistent storage using a database (e.g., MongoDB).
* Improve validation using libraries like Joi or Zod.
* Add test scripts using Jest or Supertest.
* Improve error messages and structure (e.g., standardized error codes).

---

## 📄 License

MIT
