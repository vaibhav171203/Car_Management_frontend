import React from 'react';
import CarForm from '../components/CarForm';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const CreateCar = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { title, description, tags, images } = formData;
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('tags', tags);
    Array.from(images).forEach((file) => data.append('images', file));

    try {
      await api.post('/cars', data,{ withCredentials: true });
      navigate('/cars');
    } catch (error) {
      console.error('Error creating car', error);
    }
  };

  return <CarForm onSubmit={handleSubmit} />;
};

export default CreateCar;
