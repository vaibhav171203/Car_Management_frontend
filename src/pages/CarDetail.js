import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await api.get(`/cars/${id}`,{ withCredentials: true });
        setCar(data);
      } catch (error) {
        console.error('Error fetching car details', error);
      }
    };
    fetchCar();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/cars/${id}`);
      navigate('/cars');
    } catch (error) {
      console.error('Error deleting car', error);
    }
  };

  return car ? (
    <div>
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <div>
        {car.images.map((image, index) => (
          <img key={index} src={image} alt={`Car ${index}`} width="200" />
        ))}
      </div>
      <button onClick={() => navigate(`/cars/edit/${car._id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetail;
