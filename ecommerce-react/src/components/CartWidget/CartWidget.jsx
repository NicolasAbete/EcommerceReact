import "./CartWidget.css"
import carrito from "../../assets/carrito.png";
import { PiShoppingCartFill } from "react-icons/pi";


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
            <PiShoppingCartFill size={30}/> 
            
        </div>
    )
}

export default CartWidget;