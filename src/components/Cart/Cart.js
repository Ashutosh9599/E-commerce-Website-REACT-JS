import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Cart.css';

const Cart = ({ cartElements, onClose }) => {
  const calculateTotalPrice = () => {
    return cartElements.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    console.log("Purchase clicked!");
  };

  return (
    <Modal show={true} onHide={onClose} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartElements.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="cart-total">
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlePurchase}>
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
