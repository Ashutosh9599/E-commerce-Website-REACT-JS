import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContextProvider';
import './Login.css'; // Create a CSS file for styling

const Login = () => {
  const history = useHistory();
  const { login } = useProductContext(); // Assuming you have a login function in your context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Use Firebase authentication API for login
      // Replace 'YOUR_FIREBASE_API_KEY' with your actual Firebase API key
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_FIREBASE_API_KEY`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        login(data.idToken, data.expiresIn); // Assuming your context has a login function
        localStorage.setItem('token', data.idToken); // Store token in localStorage for future use
        history.push('/store'); // Redirect to the products page
      } else {
        // Login failed
        setError(data.error.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;