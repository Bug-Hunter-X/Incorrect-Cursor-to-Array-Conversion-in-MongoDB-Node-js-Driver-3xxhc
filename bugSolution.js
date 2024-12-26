```javascript
const { MongoClient } = require('mongodb');

async function getUsers() {
  const uri = "YOUR_MONGODB_CONNECTION_STRING"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const collection = db.collection('users');
    const query = { name: /John/i };
    const cursor = collection.find(query);

    // Correct way to convert cursor to array
    const users = await cursor.toArray();
    console.log(users);
  } finally {
    await client.close();
  }
}

getUsers();
```