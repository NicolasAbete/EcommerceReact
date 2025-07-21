import { createContext, useState } from "react";

// creamos context para el carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const[ cart,setCart ] = useState([]);



    return(
        <CartContext.Provider value={ { cart } }>
            {children}
        </CartContext.Provider>
    )
};

export{ CartContext, CartProvider };