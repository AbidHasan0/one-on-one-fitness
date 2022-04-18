import React from 'react';
import "./Blogs.css"

const Blogs = () => {
   return (
      <div>
         <h1 className='blog'>This is Blogs </h1>
         <div className='blog-header'>
            <div className='blog-title'>
               <h3>Why using Firebase?What other option do you have to implement Authentication?</h3>
               <p>Firebase is an application development platform that allows developers to create iOS, Android, and Web-sites.Indeed Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic.</p>
               <p>1. Password-based authentication
                  2.Multi-factor authentication
                  3.Certificate-based authentication
                  4.Biometric authentication
                  5.Token-based authentication
               </p>
            </div>
            <div className='blog-title'>
               <h3>What other services does firebase provide than authentication</h3>
               <p>Firebase Authentication provides backend services easy to use SDKs and ready-made UI libraries to authenticate users to your app. Firebase has its limitations too. It runs on Google Cloud and you canot use it anywhere else.Since it isnot open source, it doesnot offer the customization and flexibility to adapt its code, and its services arenot all free to start. Parse is the first Firebase alternative on our list. This open source application stack framework features robust tools for developing apps. You can deploy it on any server without any issues.AWS Amplify is Amazons cloud platform. It offers a set of services and tools for building full-stack scalable apps powered by Amazon.

               </p>
            </div>
            <div className='blog-title'>
               <h3>Difference between Authorization and Authentication?</h3>
               <div>
                  <h5>Authorization</h5>
                  <p>Authorization is the process of determining if someone has access to something. This is different from authentication which is about determining who someone is in the first place.Here the user is given permission to access the system  resources after validation.	Data provided via Access token.	Here it is validated if the user is allowed to access via some defined rules</p>
                  <h5>Authentication</h5>
                  <p>Authentication is the process of determining the users identity via the available credentials, thus verifying the identity.User identity is confirmed.User and user server is verified.User can partially change the authentication details as per the requirement.Data is available via Token IDs</p>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Blogs;