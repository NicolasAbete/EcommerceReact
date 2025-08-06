import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        if (cart.length > 0) {
            clearCart();
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p className="empty-cart-message">Tu carrito está vacío</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((productCart) => (
                            <div key={productCart.id} className="cart-item">
                                <div className="item-image">
                                    <img src={productCart.image} alt={productCart.name} />
                                </div>
                                <div className="item-details">
                                    <p className="item-name">{productCart.name}</p>
                                    <p className="item-price">${productCart.price}</p>
                                    <p className="item-quantity">Cantidad: {productCart.quantity}</p>
                                    <p className="item-total">Precio Total: ${productCart.price * productCart.quantity}</p>
                                </div>
                                <button 
                                    className="remove-item-btn"
                                    onClick={() => deleteProductById(productCart.id)}
                                >
                                    Eliminar (-1)
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <p className="total-price">Precio total: ${totalPrice()}</p>
                        
                        <div className="cart-actions">
                            <button 
                                className="clear-cart-btn"
                                onClick={handleClearCart}
                            >
                                Vaciar Carrito
                            </button>
                            <Link to="/checkout" className="checkout-link">
                                Continuar con mi compra
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;