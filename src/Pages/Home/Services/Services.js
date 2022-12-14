import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data))

   }, [])
   return (
      <div id='services' className='p-4'>
         <div className="row">
            <h1 className='services-title mt-5'>My Services</h1>
            <div className='services-container mt-4'>
               {
                  services.map(service => <Service
                     key={service._id}
                     service={service}

                  >
                  </Service>)
               }
            </div>
         </div>
      </div>
   );
};

export default Services;