import { useEffect, useState } from "react";
import getPorducts from "../../data/products.js";
import ItemList from "../ItemList/ItemList";
import Item from "../Item/Item";
import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {

        getPorducts()
            .then((data)=>{
                setProducts(data);
            })
            
    }, [])

    
    

    return (
        <div>
            <h2>Bienvenido a mi Ecommerce</h2> 
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;