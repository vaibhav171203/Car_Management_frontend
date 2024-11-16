import React, { useEffect, useState } from 'react';
import CarForm from '../components/CarForm';
import api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await api.get(`/cars/${id}`,{ withCredentials: true });
        setCar(data);
      } catch (error) {
        console.error('Error fetching car data', error);
      }
    };
    fetchCar();
  }, [id]);

  const handleSubmit = async (formData) => {
    const { title, description, tags, images } = formData;
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('tags', tags);
    Array.from(images).forEach((file) => data.append('images', file));

    try {
      await api.put(`/cars/${id}`, data);
      navigate(`/cars/${id}`);
    } catch (error) {
      console.error('Error updating car', error);
    }
  };

  return car ? <CarForm initialData={car} onSubmit={handleSubmit} /> : <p>Loading...</p>;
};

export default EditCar;
