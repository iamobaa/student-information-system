# Student Management System

This project is a simple Student Management System API that provides CRUD (Create, Read, Update, Delete) operations for managing student data. It is built using Node.js, Express, and Mongoose.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or a MongoDB connection string

## Getting Started

1. Clone the repository or download the source code:

   ```
   git clone https://github.com/iamobaa/student-information-system.git
   ```

2. Install the dependencies by running the following command in the project directory:

   ```
   npm install
   ```

3. Set up your MongoDB connection by modifying the `mongoose.connect()` line in `app.js`:

   ```javascript
        mongoose.connect('mongodb://localhost:27017/studentsDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
   ```

   Replace `'mongodb://localhost:27017/studentsDB'` with your MongoDB connection string if necessary.

4. Start the server:

   ```
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Routes

### GET /students

Fetches all students.

Example response:

```json
[
  {
    "_id": "60cde28b82c7e738f8a7aae1",
    "name": "John Doe",
    "major": "Science",
    "age": 20,
    "createdDate": "2023-06-22T01:00:38.520Z",
    "updatedDate": "2023-06-22T01:00:38.520Z",
    "__v": 0
  },
  {
    "_id": "60cde2b182c7e738f8a7aae2",
    "name": "Jane Smith",
    "major": "Arts",
    "age": 20,
    "createdDate": "2023-06-22T01:00:38.520Z",
    "updatedDate": "2023-06-22T01:00:38.520Z",
    "__v": 0
  }
]
```

### GET /students/:id

Fetches a single student by their ID.

Example response:

```json
{
    "_id": "60cde28b82c7e738f8a7aae1",
    "name": "John Doe",
    "major": "Science",
    "age": 20,
    "createdDate": "2023-06-22T01:00:38.520Z",
    "updatedDate": "2023-06-22T01:00:38.520Z",
    "__v": 0
}
```

### POST /students

Adds a new student.

Example request body:

```json
{
    "name": "Alice Brown",
    "age": 21,
    "major": "Science"
}
```

Example response:

```json
{
    "_id": "64939d3a6341372401862119",
    "name": "John Cena",
    "major": "Science",
    "age": 14,
    "createdDate": "2023-06-22T01:00:38.520Z",
    "updatedDate": "2023-06-22T01:00:38.520Z",
    "__v": 0
}
```

### PUT /students/:id

Updates a student by their ID.

Example request body:

```json
{
    "_id": "64939d3a6341372401862119",
    "name": "Jane Cena",
    "major": "Arts",
    "age": 22,
    "createdDate": "2023-06-22T01:00:38.520Z",
    "updatedDate": "2023-06-22T01:00:38.520Z",
    "__v": 0
}
```

Example response:

```json
{
  "_id": "60cde28b82c7e738f8a7aae3",
  "name": "Alice Green",
  "age": 22,
  "__v": 0
}
```

### DELETE /students/:id

Deletes a student by their ID.

Example response:

```json
{
  "_id": "60cde28b82c7e738f8a7aae3",
  "name": "Alice Green",
  "age": 22,
  "__v": 0
}
```
