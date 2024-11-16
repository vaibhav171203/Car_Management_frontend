// import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api',
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
// 'http://localhost:5000/api'
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||'https://car-management-backend-an95.onrender.com' ,
  withCredentials: true, // This ensures cookies are sent with each request
});

export default api;

