import "./CartWidget.css"
import carrito from "../../assets/carrito.png";
import { PiShoppingCartFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    
    const handleCartClick = () => {
        // Aquí puedes agregar la lógica para abrir el carrito
        console.log("Abriendo carrito...");
    };

    return(
        <Link to="/cart"
            className="cartwidget" 
            onClick={handleCartClick}
            data-tooltip="Ver carrito"
        >
            <PiShoppingCartFill size={30}/> 
            <p>{totalQuantity()}</p>
            
        </Link>
    )
}

export default CartWidget;