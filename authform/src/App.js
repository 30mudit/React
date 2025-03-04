import React, { useState } from 'react';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    setErrorMessage('');
    
    if (!email || !password || (isRegistering && !confirmPassword)) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    
    if (isRegistering && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!isRegistering) {
      // Simulate login logic
      if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
      } else {
        setErrorMessage('Invalid credentials.');
      }
    } else {
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isRegistering && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button onClick={handleSubmit}>{isRegistering ? 'Register' : 'Login'}</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: 'pointer', color: 'blue' }}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default AuthForm;
