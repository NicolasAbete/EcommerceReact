import { useEffect, useState } from "react";
import getPorducts from "../../data/products.js";
import ItemList from "../ItemList/ItemList";
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
        <div className="item-list-container">
            <h2>{saludo}</h2> 
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;