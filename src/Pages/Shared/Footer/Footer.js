import React from 'react';
import './Footer.css'

const Footer = () => {
   const today = new Date();
   const year = today.getFullYear()
   return (
      <footer>

         <div class="footer-part">

            <h2>ONE on ONE FITNESS</h2>
            <p>copyright @ {year} FITNESS<br />all right reserved</p>



         </div>
      </footer>
   );
};

export default Footer;