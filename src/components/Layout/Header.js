import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useProductContext } from '../Context/ProductContextProvider';
import Cart from '../Cart/Cart';

const Header = () => {
    const { cart } = useProductContext();
    const [showCart, setShowCart] = useState(false);

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const totalCartItems = cart ? cart.length : 0;

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg">
                <Container className='header-container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                            <Nav.Link as={NavLink} to="/" activeclassname="active">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/store" activeclassname="active">Store</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeclassname="active">About</Nav.Link>

                        </Nav>
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="cart-name">Your Cart</span>
                                {/* Display the cart count */}
                                <span className="cart-count">{totalCartItems}</span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCart && (
                <Cart cartElements={cart} onClose={handleCloseCart} />
            )}
        </React.Fragment>
    );
};

export default Header;
