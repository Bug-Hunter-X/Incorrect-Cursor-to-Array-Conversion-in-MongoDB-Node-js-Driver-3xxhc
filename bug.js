```javascript
const query = { name: /John/i };
const cursor = db.collection('users').find(query);

// Incorrect way to convert cursor to array
const users = [];
while (await cursor.hasNext()) {
  users.push(await cursor.next());
}
```