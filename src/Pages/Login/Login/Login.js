import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   const emailRef = useRef("");
   const passwordRef = useRef("");
   const navigate = useNavigate();

   const location = useLocation();
   let form = location.state?.form?.pathname || '/';
   let errorElement;

   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useSignInWithEmailAndPassword(auth);
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


   if (loading || sending) {
      return <Loading></Loading>

   }
   if (user) {
      navigate(form, { replace: true });
   }

   if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      signInWithEmailAndPassword(email, password)
   }

   const navigateRegister = (event) => {
      navigate('/register');

   }
   const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
         await sendPasswordResetEmail(email);
         toast('Sent email');
      }
      else {
         toast('please enter your email address');
      }
   }

   return (
      <div style={{ backgroundColor: "antiquewhite" }} className='container w-50 mx-auto p-2'>
         <h2 className='text-primary text-center mt-2'>Please Login</h2>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

               <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

               <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
               Submit
            </Button>
         </Form>
         {errorElement}
         <p className='text-center'>New to Fitness?<Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
         <p className='text-center'>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
         <SocialLogin></SocialLogin>
         <ToastContainer />
      </div>
   );
};

export default Login;