import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
   const [user] = useAuthState(auth);

   const handleSignOut = () => {
      signOut(auth);
   }
   return (

      <>

         <Navbar collapseOnSelect style={{ backgroundColor: 'coral' }} expand="lg" sticky='top' variant="dark">
            <Container>
               <Navbar.Brand as={Link} to="/"><span style={{ color: "indigo" }}>ONE on ONE FITNESS</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href='home#services'><span style={{ color: 'ghostwhite' }}>Services</span></Nav.Link>
                     <Nav.Link as={Link} to="/blogs"><span style={{ color: 'ghostwhite' }}>Blog</span></Nav.Link>

                  </Nav>
                  <Nav>
                     <Nav.Link as={Link} to="/about"><span style={{ color: 'ghostwhite' }}>About</span></Nav.Link>
                     {
                        user ?
                           <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                           :
                           <Nav.Link as={Link} to="/login">
                              <span style={{ color: 'ghostwhite' }}>Login</span>
                           </Nav.Link>}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

      </>

   );
};

export default Header;