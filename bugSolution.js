const express = require('express');
const app = express();

// Simulate database query (replace with your actual database interaction)
const dbQuery = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
};

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); // sanitize and validate input
    if (isNaN(userId)) {
      return res.status(400).send('Invalid user ID');
    }
    const user = await dbQuery(userId);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));