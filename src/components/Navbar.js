// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');  // Check if user is logged in

//   const handleLogout = () => {
//     localStorage.removeItem('token');  // Remove the token on logout
//     navigate('/');  // Redirect to login page
//   };

//   return (
//     <nav style={styles.navbar}>
//       <h2 style={styles.title}>Car Management</h2>
//       <div style={styles.links}>
//         {token ? (  // If user is logged in
//           <>
//             <Link to="/cars" style={styles.link}>Your Cars</Link>
//             <Link to="/cars/new" style={styles.link}>Add New Car</Link>
//             <button onClick={handleLogout} style={styles.logout}>Logout</button>
//           </>
//         ) : (  // If user is not logged in
//           <>
//             <Link to="/" style={styles.link}>Login</Link>
//             <Link to="/register" style={styles.link}>Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Styles for Navbar component (you can replace this with CSS)
// const styles = {
//   navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#007bff', color: 'white' },
//   title: { margin: 0 },
//   links: { display: 'flex', gap: '15px', alignItems: 'center' },
//   link: { color: 'white', textDecoration: 'none' },
//   logout: { background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' },
// };

// export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'; 
// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');  // Check if user is logged in

//   const handleLogout = () => {
//     localStorage.removeItem('token');  // Remove the token on logout
//     navigate('/');  // Redirect to login page
//   };

//   return (
//     <nav style={styles.navbar}>
//       <h2 style={styles.title}>Car Management</h2>
//       <div style={styles.links}>
//         {token ? (  // If user is logged in
//           <>
//             <Link to="/cars" style={styles.link}>Your Cars</Link>
//             <Link to="/cars/new" style={styles.link}>Add New Car</Link>
//             <button onClick={handleLogout} style={styles.logout}>Logout</button>
//           </>
//         ) : (  // If user is not logged in
//           <>
//             <Link to="/" style={styles.link}>Login</Link>
//             <Link to="/register" style={styles.link}>Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Styles for Navbar component (you can replace this with CSS)
// const styles = {
//   navbar: { 
//     display: 'flex', 
//     justifyContent: 'space-between', 
//     padding: '15px 30px', 
//     backgroundColor: '#1c1c1c', 
//     color: 'white',
//     alignItems: 'center',
//     borderBottom: '2px solid #333', // Adding a subtle border at the bottom
//   },
//   title: { 
//     margin: 0, 
//     fontSize: '24px', 
//     fontWeight: '600', 
//     letterSpacing: '1px', 
//     color: '#fff'
//   },
//   links: { 
//     display: 'flex', 
//     gap: '20px', 
//     alignItems: 'center' 
//   },
//   link: { 
//     color: 'white', 
//     textDecoration: 'none', 
//     fontSize: '16px', 
//     fontWeight: '500', 
//     transition: 'color 0.3s ease', 
//   },
//   logout: { 
//     background: '#f44336', 
//     color: 'white', 
//     border: 'none', 
//     padding: '8px 15px', 
//     cursor: 'pointer', 
//     borderRadius: '20px', 
//     fontSize: '14px',
//     transition: 'background-color 0.3s ease',
//   },
//   // Hover effects for links and logout button
//   linkHover: {
//     color: '#00bcd4', 
//   },
//   logoutHover: {
//     backgroundColor: '#d32f2f', 
//   },
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the new CSS

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');  // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove the token on logout
    navigate('/');  // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-title">Garage360</h2>
        <div className="navbar-links">
          {token ? (  // If user is logged in
            <>
              <Link to="/cars" className="navbar-link">My Cars</Link>
              <Link to="/cars/new" className="navbar-link">Add Car</Link>
              <button onClick={handleLogout} className="navbar-logout">Logout</button>
            </>
          ) : (  // If user is not logged in
            <>
              <Link to="/" className="navbar-link">Login</Link>
              <Link to="/register" className="navbar-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
