const express = require('express')
const router = express.Router()
const user = require('../controller/user')

router.get('/',user.getAllUser)
router.get('/:id',user.getUser)
router.post('/',user.addUser)
router.put('/:id',user.editUser)
router.patch('/:id',user.editUser)
router.delete('/:id',user.deleteUser)

// Login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // TODO: Make a fetch request to your backend for authentication
      // Example: const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: { 'Content-Type': 'application/json' } });

      // TODO: Handle the response from the server
      const data = await response.json();
      if (response.ok) { ;'log in successful!', // redirect or set authentication state */ } else { setError(data.error); 
    }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;

module.exports = router