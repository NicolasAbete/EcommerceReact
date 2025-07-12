import useProducts from "../../hooks/useProducts.js";
import { useEffect, useState } from "react";
import getPorducts from "../../data/products.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
    const { products, loading } = useProducts ();

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2> 
            {
                loading ? <div>CARGANDO...</div> : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer;