import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <footer className={theme}>
      <p>&copy; 2025 MO YA. All rights reserved.</p>
    </footer>
  );
}

export default Footer;