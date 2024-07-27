import React from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'

function ProductCard(props) {
 const product = props.product;
  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button>Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard