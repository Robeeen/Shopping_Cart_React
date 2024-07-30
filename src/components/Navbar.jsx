import React, { useState, useContext } from 'react';
import {Button, Navbar, Modal} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduxt from './CartProduxt';


function NavbarComponent() {

   const [ show, setShow ] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const cart = useContext(CartContext);
   const totalCart = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (

    <>
        <Navbar expand="sm">
            <Navbar.Brand href="/">Ecommerce Application</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart {totalCart} Item</Button>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Store Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {totalCart > 0 ?
                    <>  
                    <p>Items in your Cart:</p>
                        {cart.items.map((currentProduct, index) => (
                            <CartProduxt key={index} id={currentProduct.id} quantity={currentProduct.quantity}/>
                        ))}
                        <h3> Total Price: {cart.getTotalCost().toFixed(2)}</h3>
                        <Button variant='success' size='sm'>
                            Purchase!
                        </Button>
                    </>
                    : <h3> There is no item in the cart now</h3>
                  
                }
                
            </Modal.Body>

        </Modal>
    
    </>
   
  )
}

export default NavbarComponent