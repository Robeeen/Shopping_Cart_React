import { Children, createContext, useState } from "react";
import { productArray, getProductData } from "./product";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}){

    const [ cartProducts, setCartProducts ] = useState([]);
    
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    function getProductQuantity (id){
        const quantity = cartProducts.find(product => product.id === id?.quantity);

        if( quantity === undefined ){
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if( quantity === 0 ){ //if product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else{ //if product is in the cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart (id) {
        const quantity = getProductQuantity(id);

        if( quantity == 1 ){
            deleteFromCart();
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart (id)  {
        // [] if an object meet a condition, add the objec to array
        // [product1, product2, product3]
        // [product1, product3]

        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )
    }

    function getTotalCost(){
        const totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

