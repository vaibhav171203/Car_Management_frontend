import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cars/${car._id}`);
  };

  return (
    <div className="car-card" onClick={handleClick} style={styles.card}>
      <img
        src={car.images[0] || 'https://via.placeholder.com/150'} // Placeholder if no image
        alt={car.title}
        style={styles.image}
      />
      <div style={styles.details}>
        <h3>{car.title}</h3>
        <p>{car.description}</p>
        <div style={styles.tags}>
          {car.tags.map((tag, index) => (
            <span key={index} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles for CarCard component (you can replace this with CSS)
const styles = {
  card: { cursor: 'pointer', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', margin: '10px' },
  image: { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' },
  details: { padding: '10px' },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '5px' },
  tag: { background: '#007bff', color: 'white', padding: '5px', borderRadius: '4px', fontSize: '12px' },
};

export default CarCard;
