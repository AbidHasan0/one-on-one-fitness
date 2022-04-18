import React from 'react';
import mypicture from '../../images/mypicture.png'


const About = () => {
   return (
      <div>
         <h1 style={{ color: "blueviolet" }} className='text-center'>This My About</h1>
         <div className='d-flex align-items-center justify-content-center px-3 py-3'>
            <img style={{ height: "400px" }} className='w-50' src={mypicture} alt="" />
            <div className='px-3'>
               <h2 style={{ color: "dodgerblue" }}>Name: Abid Hasan Rejvi</h2>
               <h3 style={{ color: "dodgerblue" }}>My Goal</h3>
               <p>I already larnned html,css,bootstraps,tailwind,vanila javascript,react.I can build some website.i fill to very happay and i beleived next 3-4 month i am proper web developer.programing-hero is very helpfull platform.there are many project creat it and some project next some days create.now i fill next 3-4 month i am a junior web-developer and 1 year a senior web-developer make it.</p>

            </div>
         </div>

      </div>
   );
};

export default About;