import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        if (cart.length > 0) {
            clearCart();
        }
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    {cart.map((productCart) => (
                        <div key={productCart.id}>
                            <img src={productCart.image} alt="" />
                            <p>{productCart.name}</p>
                            <p>${productCart.price}</p>
                            <p>Cantidad: {productCart.quantity}</p>
                            <p>Precio Total: ${productCart.price * productCart.quantity}</p>
                            <button onClick={() => deleteProductById(productCart.id)}>
                                Eliminar (-1)
                            </button>
                        </div>
                    ))}

                    <p>Precio total: ${totalPrice()}</p>

                    <button 
                        onClick={handleClearCart}
                    >
                        Vaciar Carrito
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;