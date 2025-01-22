import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  const handleGoogleResponse = async (response, actionType) => {
    if (!response.credential) {
      console.error('Google Authentication Error');
      return;
    }

    const token = response.credential; // Google ID token

    try {
      // Send token and action type (login/signup) to the backend
      const res = await axios.post('http://localhost:3000/auth/google', {
        token,
        actionType,
      });

      // Set the user data returned from the backend
      setUser(res.data);
    } catch (error) {
      console.error('Backend Error:', error);
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Google Authentication</h1>

        {!user ? (
          <div>
            <h3>Login or Sign-Up</h3>
            <GoogleLogin
              onSuccess={(response) => handleGoogleResponse(response, 'login')}
              onError={() => console.error('Login Failed')}
              buttonText="Login"
            />
            <br />
            <br />
            <GoogleLogin
              onSuccess={(response) => handleGoogleResponse(response, 'signup')}
              onError={() => console.error('Sign-Up Failed')}
              buttonText="Sign-Up"
            />
          </div>
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="Profile" style={{ borderRadius: '50%' }} />
            <br />
            <button onClick={handleLogout} style={{ marginTop: '20px' }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
