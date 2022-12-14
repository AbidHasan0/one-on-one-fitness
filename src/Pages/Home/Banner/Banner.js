import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';


const Banner = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   return (

      <Carousel activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={banner1}
               alt="First slide"
            />
            <Carousel.Caption>
               <h3>Make It Happen!</h3>
               <p>Build Your Body Transform Your Life</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={banner2}
               alt="Second slide"
            />

            <Carousel.Caption>
               <h3>Make It Happen!</h3>
               <p>Get Fit Strong And Motivated</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={banner3}
               alt="Third slide"
            />

            <Carousel.Caption>
               <h3>Make It Happen!</h3>
               <p>
                  Transform Your Life
               </p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>

   );
};

export default Banner;