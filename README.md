# Unhandled Database Errors and Missing Input Sanitization in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled database query errors and the lack of input sanitization in route parameters.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version.

**Problem:**

The original code lacks error handling for database queries, making the application susceptible to crashes.  It also directly uses the `req.params.id` without validation or sanitization, increasing vulnerability to unexpected inputs and potential security risks.

**Solution:**

The solution includes comprehensive error handling for database operations and input validation to improve application robustness and security.

## How to run:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the directory: `cd express-error-handling`
3. Install dependencies: `npm install`
4. Run the application: `node bug.js` (and `node bugSolution.js` to see the fix)