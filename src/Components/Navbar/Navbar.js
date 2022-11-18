import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function CollapsibleExample() {
    const [navbar , setNavbar] = useState(false);
    const changebackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changebackground);
    return (
        <div className='nav-bar'>
            <Navbar collapseOnSelect expand="lg" className={navbar ? 'navbar actives' : 'navbar'}>
                <Container>
                    <Navbar.Brand href="#home">Sudipta-Biswas</Navbar.Brand>
                    <Navbar.Toggle className='toggol' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><NavLink className='nav-link' to='/'>Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink className='nav-link' to='/about'>About</NavLink></Nav.Link>
                            <Nav.Link><NavLink className='nav-link' to='/contuct'>Contuct</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default CollapsibleExample;