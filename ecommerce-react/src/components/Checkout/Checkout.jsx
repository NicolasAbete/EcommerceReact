import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import OrderSuccess from "../OrderSucces/OrderSucces.jsx";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);
    
    const handleChangeInput = (event)=>{
        setDataForm( { ...dataForm, [event.target.name] : event.target.value } );
    }

    const sendOrder = (event) => {
        event.preventDefault();
        
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }
        
        console.log("Orden creada:", order);
        uploadOrder(order);

    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
    }catch(error){
            console.log("error al subir la orden")
        }
    }

    return (
        <div>
            {
                orderId ? (
                        <div>
                            <OrderSuccess orderId={orderId}/>
                        </div>
                ) : (
                        <FormCheckout 
                dataForm={dataForm} 
                handleChangeInput={handleChangeInput} 
                sendOrder={sendOrder}
                cart={cart}
                totalPrice={totalPrice} />
                )
            }
        </div>
    )
}

export default Checkout