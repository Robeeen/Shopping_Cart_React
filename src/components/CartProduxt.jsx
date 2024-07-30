import { React, useContext }  from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../product'

//We want to access the Title, since it is not accesible from Navbar.jsx while iterating on cart.items.map
//We 

function CartProduxt(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

  return (
    <>  
        <p>Product Name: {productData.title}</p>
        <p>Product Quantity: {quantity}</p>
        <p>Price: {productData.price * quantity}</p>
        <Button  size="sm" onClick={() => cart.deleteFromCart(id)} >Delete</Button>
        <hr></hr>
    </>
   
  )
}

export default CartProduxt