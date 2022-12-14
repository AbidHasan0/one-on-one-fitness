import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
   const [agree, setAgree] = useState(false);
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);

   const navigate = useNavigate();

   if (loading || updating) {
      return <Loading></Loading>

   }

   const navigateLogin = () => {
      navigate('/login')
   }

   // if (user) {
   //    navigate('/home')
   // }

   const handleRegister = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      if (agree) {
         await createUserWithEmailAndPassword(email, password);
         await updateProfile({ displayName: name });
         alert('Updated profile');
         navigate('/home')
      }

   }
   return (
      <div className='register-form'>
         <h2 style={{ textAlign: 'center' }} className="text-primary">Please Register</h2>
         <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name' />

            <input type="email" name="email" id="" placeholder='Your Mail' required />

            <input type="password" name="password" id="" placeholder='Your Password' required />

            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accept Terms and Condition</label>
            <input
               className='w-50 mx-auto btn btn-primary mt-2'
               type="submit" value="Register" />
         </form>
         <p>Already have an Account?<Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
         <SocialLogin></SocialLogin>
      </div>
   );
};

export default Register;