import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/RegisterPage';  // Import the Register Page component
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import CreateCar from './pages/CreateCar';
import EditCar from './pages/EditCar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/cars" element={<CarList />} />
      <Route path="/cars/new" element={<CreateCar />} />
      <Route path="/cars/:id" element={<CarDetail />} />
      <Route path="/cars/edit/:id" element={<EditCar />} />
    </Routes>
  </Router>
);

export default App;
