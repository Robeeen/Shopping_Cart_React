import React from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
 const product = props.product;
 const cart = useContext(CartContext);
 const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
        <Card.Body>
            <Card.Img src={product.image}></Card.Img>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            { productQuantity > 0 ?
              <>
                <div as={Row}>
                  <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                    <Col sm="6">
                      <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                      <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                    </Col>
                </div>
              </>
              :<Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            }            
        </Card.Body>
    </Card>
  )
}

export default ProductCard