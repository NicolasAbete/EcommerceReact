import React from "react"
import useProduct from "../../hooks/useProduct"
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../NotFound/NotFound"; 
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const { product, loading, error } = useProduct(productId);
    
    if (loading) {
        return <Loading />;
    }
    
    // Verificamos si hay error o si el producto está vacío (no tiene propiedades)
    if (error || !product || Object.keys(product).length === 0) {
        return <NotFound />;
    }

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer