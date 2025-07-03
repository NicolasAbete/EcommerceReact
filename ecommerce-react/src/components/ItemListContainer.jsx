import { useEffect, useState } from "react";
import getPorducts from "../data/products.js";
import Item from "./Item.jsx";

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
            <h2>{saludo}</h2> 
            <ul>
                {
                    products.map((product)=>(
                        <Item product={product} key={product.id} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemListContainer;