import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { products } from '../product'
import ProductCard from '../components/ProductCard'
    
    function Store() {
      return (
        <div>
            <h2 align="center" >Welcome to the Store!!</h2>
            <Row xs={1} md={3} className='g-4'>
                {products.map((product, index) => (
                    <Col align="center" key={index}>
                       <ProductCard product={product} />
                    </Col>
                ))}
            </Row>       
        </div>
      )
    }
    
    export default Store