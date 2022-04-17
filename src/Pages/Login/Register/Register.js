import React from 'react';

const Register = () => {
   return (
      <div className='register-form'>
         <h1>Please Register</h1>
         <form>
            <input type="text" name="name" id="" placeholder='Your Name' />

            <input type="email" name="email" id="" placeholder='Your Mail' required />

            <input type="password" name="password" id="" placeholder='Your Password' required />

            <input type="submit" value="Register" />
         </form>
      </div>
   );
};

export default Register;