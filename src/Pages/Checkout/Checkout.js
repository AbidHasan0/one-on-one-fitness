import React from 'react';

const Checkout = () => {


   const handleSubmit = (event) => {
      event.preventDefault();
      alert('Sucessfull your booking')
      handleSubmit.value = "";
   }
   return (
      <div className='py-4'>
         <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className="text-primary">Please Booking</h2>
            <form onSubmit={handleSubmit}>
               <input type="text" name="name" id="" placeholder='Your Name' required />

               <input type="number" name="number" id="" placeholder='Your Number' required />

               <input type="Address" name="Address" id="" placeholder='Your Address' required />

               <input
                  className='w-50 mx-auto btn btn-primary mt-2'
                  type="submit" value="submit" />
            </form>
         </div>
      </div>
   );
};

export default Checkout;