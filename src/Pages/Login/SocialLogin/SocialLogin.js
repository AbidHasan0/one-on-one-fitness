import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
   const navigate = useNavigate();

   let errorElement;

   if (loading || loading1) {
      return <Loading></Loading>

   }

   if (error || error1) {
      errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

   }

   if (user || user1) {
      navigate('/home')

   }

   return (
      <div>
         <div className='d-flex align-items-center'>
            <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            <p className='mt-2 px-2'>OR</p>
            <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
         </div>
         {errorElement}
         <button
            onClick={() => signInWithGoogle()}
            className='btn btn-info w-50 d-block mx-auto my-3'>
            <img src={google} alt="" />
            <span className='px-2'>Google SignIn</span>
         </button>
         <button
            onClick={() => signInWithGithub()}
            className='btn btn-info w-50 d-block mx-auto my-3'>
            <img src={github} alt="" />
            <span className='px-2'>GitHub SignIn</span>
         </button>
      </div>
   );
};

export default SocialLogin;