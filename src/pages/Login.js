// import React, { useState } from 'react';
// import api from '../api/api';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await api.post('/auth/login', { email, password });
//       localStorage.setItem('token', data.token);
//       navigate('/cars');
//     } catch (error) {
//       alert('Login failed, check credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Import your new styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password },{ withCredentials: true });
      console.log('token',data.token);
      // localStorage.setItem('token', data.token);
      if (data && data.token) {
        localStorage.setItem('token', data.token);
      } else {
        console.error('Token not found');
      }
      
      navigate('/cars');
    } catch (error) {
      setError('Login failed, please check your credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
