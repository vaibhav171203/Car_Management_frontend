// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       // const response = await api.post('/auth/signup', {
//       //   username: formData.username,
//       //   email: formData.email,
//       //   password: formData.password
//       // });
//       const response = await api.post('/auth/signup', {
//         name: formData.username.trim(),
//         email: formData.email.trim(),
//         password: formData.password
//       });
//       console.log(response.data);

//       // Redirect to login page on success
//       navigate('/login');
//     } catch (error) {
//       console.error(error.response || error.message || error);
//       setError(error.response?.data?.message || "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './RegisterPage.css'; // Add this CSS file for styling

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await api.post('/auth/signup', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password
      },{ withCredentials: true });
      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.error(error.response || error.message || error);
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <h2 className="form-title">Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
