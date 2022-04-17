import React from 'react';
import './Footer.css'

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear()
   return (
      <footer className='footer'>
         <p className='footer-title'>copyright @ {year}</p>
      </footer>
   );
};

export default Footer;