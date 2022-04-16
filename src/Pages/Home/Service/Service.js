import React from 'react';
import './Service.css'

const Service = ({ service }) => {
   const { name, price, detail, picture } = service
   return (
      <div className='service'>
         <img className='w-100 p-2' src={picture} alt="" />
         <h3>Name: {name}</h3>
         <p>Price:${price}</p>
         <p><small>Detail: {detail}</small></p>
         <button className='btn btn-primary'>Book:{name}</button>
      </div>
   );
};

export default Service;