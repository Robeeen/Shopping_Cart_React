import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
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
                <Form as={Row}>
                  <Form.Label column="true" sm="6">Total: {productQuantity}</Form.Label>
                    <Col sm="6">
                      <Button sm="2" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                      <Button sm="2" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                      <Button sm="4" variant="danger" onClick={() => cart.deleteFromCart(product.id)} className='mx-2'>Clear</Button>
                    </Col>              

                </Form>
                
              </>
              :<Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            }            
        </Card.Body>
    </Card>
  )
}

export default ProductCard