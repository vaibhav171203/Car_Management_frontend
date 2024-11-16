import React, { useState } from 'react';
import axios from 'axios';

const CarForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [tags, setTags] = useState(initialData?.tags.join(', ') || '');
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => setImages(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);

    // Append images to formData
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    // Send POST request to backend using Axios
    try {
      const response = await axios.post('http://localhost:5000/api/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the header for file upload
        },
      });
      console.log('Car saved successfully:', response.data);
      // You can call onSubmit or navigate elsewhere after successful creation
    } catch (error) {
      console.error('Error saving car:', error);
      // Handle the error appropriately (show a message to the user, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
      />
      <input type="file" onChange={handleFileChange} multiple />
      <button type="submit">Save</button>
    </form>
  );
};

export default CarForm;
