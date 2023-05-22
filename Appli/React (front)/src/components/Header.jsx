import React from 'react';
import Logo from '../assets/img/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { ImEnter } from 'react-icons/im';
import '../assets/css/header.css';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className='title'>
      DELPHARM
      <img src={Logo} className='logo' alt="logo delpharm" />
      <Navbar bg="light" expand="sm" className='nav'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* {(auth.role > 0) &&  */}
              <Link to="/accueil" title="Retour à l'accueil" className='icons'><FaHome /></Link>
              {/* } */}
              {/* {(auth.role > 0) &&  */}
              <Link to="/compte" title="Mon compte" className='icons'><FaUser /></Link>
              {/* } */}
              {(auth.role > 0) &&
                <Link to="/deconnexion" title="Déconnexion" className='icons'><ImExit /></Link>
              }
              {(auth.role === 0) &&
                <Link to="/connexion" title="Connexion" className='icons'><ImEnter /></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header;