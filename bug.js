const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Problem: Missing error handling for database query failure.  If the database query fails (e.g., due to a network issue or database error), the application will crash without providing a proper error response to the client.

// Another Problem: Using req.params.id directly without sanitization or validation can lead to unexpected behaviour or security vulnerabilities. If a malicious actor submits an unexpected value as an ID (e.g., including special characters or SQL injection attempts), this could result in application errors or compromise of data integrity.