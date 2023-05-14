// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';

// function DarkModeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const body = document.querySelector('body');
//     if (isDarkMode) {
//       body.classList.add('lighter-dark-mode');
//     } else {
//       body.classList.remove('lighter-dark-mode');
//     }
//   }, [isDarkMode]);

//   const handleClick = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <Button onClick={handleClick} variant="outline-secondary">
//       {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//     </Button>
//   );
// }

// export default DarkModeToggle;
