import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/icons8-linkedin-100.png';
import navIcon2 from '../assets/img/icons8-github-100.png';
import menu from '../assets/img/menu.png';


import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const onDownloadButtonClick = () => {
    const fileURL = '/CV_NicoleOpazoAranda.pdf';
    const fileName = 'nicole-opazo-cv.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = fileName;

    downloadLink.click();
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{width: '50px', height: '45px', padding: '0', marginLeft: '1%'}}>
            <img src={menu}></img>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                Inicio
              </Nav.Link>

              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                Habilidades
              </Nav.Link>

              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>
                Proyectos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/nicoleOpazo"><img src={navIcon2} alt="" /></a>
                <a href="https://www.linkedin.com/in/nicole-opazo-aranda/"><img src={navIcon1} alt="" /></a>
              </div>
              <HashLink to='#'>
                <button id="downloadButton" className="vvd" onClick={onDownloadButtonClick}>
                  <span>Descargar CV</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}