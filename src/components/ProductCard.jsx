import React from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
 const product = props.product;
 const cart = useContext(CartContext);
 const productQuantity = cart.getProductQuantity(product.id);
 
  return (
    <Card>
        <Card.Body>
            <Card.Img src={product.image}></Card.Img>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button>Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard