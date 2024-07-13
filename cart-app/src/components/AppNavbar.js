import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    // عايز اعرض عدد المنتجات اللي دوست عليهم جمب كلمة cart
    const cart = useSelector(state => state.cart)
    return(
        <>
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
        <Container>
            <Link to="/" className='navbar-brand'>Cart-App</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/products" className='nav-link'>Products</Link>
                <Link to="/cart" className='nav-link'>Cart - {cart.length}</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    )
}
export default AppNavbar;