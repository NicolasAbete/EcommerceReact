import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
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

        console.log(order)
    }

return (
    <div>
        <form onSubmit={sendOrder}>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>

            <input type="number" name="phone" vlaue={dataForm.phone} onChange={handleChangeInput} />

            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Enviar Orden</button>
        </form>
    </div>
)
}

export default Checkout