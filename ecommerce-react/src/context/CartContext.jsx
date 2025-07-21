import { createContext, useState } from "react";

// creamos context para el carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const[ cart,setCart ] = useState([]);

    const addProductInCart = (product) => {
        setCart( [ ...cart, product ] );
    };

    console.log(cart)

    return(
        <CartContext.Provider value={ { cart, addProductInCart } }>
            {children}
        </CartContext.Provider>
    )
};

export{ CartContext, CartProvider };