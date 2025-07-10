import "./CartWidget.css"
import carrito from "../../assets/carrito.png";

const CartWidget = () => {
    const itemCount = 0; // Esto vendría de tu estado global del carrito
    
    const handleCartClick = () => {
        // Aquí puedes agregar la lógica para abrir el carrito
        console.log("Abriendo carrito...");
    };

    return(
        <div 
            className="cartwidget" 
            onClick={handleCartClick}
            data-tooltip="Ver carrito"
        >
            <img 
                src={carrito} 
                className="cart-icon" 
                alt="Carrito de compras" 
            />
            <span className={`cart-count ${itemCount === 0 ? 'zero' : ''}`}>
                {itemCount}
            </span>
        </div>
    )
}

export default CartWidget;