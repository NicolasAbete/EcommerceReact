import "./CartWidget.css"
import carrito from "../../assets/carrito.png";

const CartWidget = () => {

    return(
        <div className="cartwidget">
            <img src={carrito} width={50} height={50} alt="" />
            <h2>7</h2>
        </div>

    )

}

export default CartWidget;