import React, { useEffect, useState } from 'react';
import api from '../api/api';
import CarCard from '../components/CarCard';
import { useNavigate } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // const fetchCars = async () => {
  //   try {
  //     const { data } = await api.get(`/cars?search=${searchQuery}`);
  //     setCars(data);
  //   } catch (error) {
  //     console.error('Failed to fetch cars', error);
  //   }
  // };
  const fetchCars = async () => {
    try {
      const { data } = await api.get(`/cars?search=${searchQuery}`,{ withCredentials: true });
      if (data && data.length > 0) {
        setCars(data);  // Display cars if data exists
      } else {
        setCars([]);  // Handle empty car list
        console.log('No cars found');
      }
    } catch (error) {
      console.error('Failed to fetch cars', error);
    }
  };
  
  useEffect(() => {
    fetchCars();
  }, [searchQuery]);

  return (
    <div>
      <h2>Your Cars</h2>
      <input
        type="text"
        placeholder="Search by title, description, or tags"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} onClick={() => navigate(`/cars/${car._id}`)} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
