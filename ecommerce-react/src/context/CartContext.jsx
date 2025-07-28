import { createContext, useState } from "react";

// creamos context para el carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const[ cart,setCart ] = useState([]);

    const addProductInCart = (product) => {
        // Verificamos si el producto ya existe en el carrito
        const existingProduct = cart.find(item => item.id === product.id);
        
        if (existingProduct) {
            // Calculamos la nueva cantidad total que tendríamos
            const newTotalQuantity = existingProduct.quantity + product.quantity;
            
            // Verificamos si no excede el stock disponible
            if (newTotalQuantity <= product.stock) {
                // Si no excede el stock, actualizamos la cantidad
                const updatedCart = cart.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: newTotalQuantity }
                        : item
                );
                setCart(updatedCart);
            } else {
                // Si excede el stock, mostramos un mensaje de error o no hacemos nada
                alert(`No puedes agregar más productos. Stock disponible: ${product.stock}, ya tienes ${existingProduct.quantity} en el carrito.`);
            }
        } else {
            // Si el producto no existe, verificamos que la cantidad no exceda el stock
            if (product.quantity <= product.stock) {
                // Si no excede el stock, lo agregamos normalmente
                setCart( [ ...cart, product ] );
            } else {
                // Si excede el stock, mostramos un mensaje de error
                alert(`No puedes agregar ${product.quantity} productos. Stock disponible: ${product.stock}`);
            }
        }
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product)=> total + product.quantity, 0);
        return total;
    }

    const totalPrice = () => {
        const total = cart.reduce((total, product)=> total + ( product.price * product.quantity ), 0);
        return total;
    }

    const deleteProductById = (id) => {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                // Si la cantidad es mayor a 1, reducimos en 1
                if (product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                // Si la cantidad es 1, retornamos null para eliminarlo después
                return null;
            }
            return product;
        }).filter(product => product !== null); // Filtramos los productos null
        
        setCart(updatedCart);
    }

    // Función adicional para eliminar completamente un producto (opcional)
    const removeProductCompletely = (id) => {
        const productsFilter = cart.filter((product)=> product.id !== id );
        setCart(productsFilter);
    }

    // Función para vaciar completamente el carrito
    const clearCart = () => {
        setCart([]);
    }

    // Función para obtener la cantidad disponible de un producto
    const getAvailableStock = (productId, totalStock) => {
        const productInCart = cart.find(item => item.id === productId);
        const quantityInCart = productInCart ? productInCart.quantity : 0;
        return totalStock - quantityInCart;
    }


    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, removeProductCompletely, clearCart, getAvailableStock } }>
            {children}
        </CartContext.Provider>
    )
};

export{ CartContext, CartProvider };