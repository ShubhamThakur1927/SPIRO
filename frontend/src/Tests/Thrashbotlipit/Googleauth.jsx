import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    try {
      // Decode the token to extract user information
      const decodedUser = jwt_decode(response.credential);
      setUser({
        name: decodedUser.name,
        email: decodedUser.email,
        picture: decodedUser.picture,
      });
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const handleLogout = () => {
    googleLogout(); // Logs out of Google
    setUser(null); // Clears user state
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.error('Login Failed')}
          />
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="Profile" style={{ borderRadius: '50%' }} />
            <button onClick={handleLogout} style={{ marginTop: '20px' }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
