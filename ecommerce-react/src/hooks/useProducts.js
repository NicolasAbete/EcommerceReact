import { useEffect, useState } from "react"
import getPorducts from "../data/products.js";

const useProducts = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        getPorducts()
            .then((data)=>{
                setProducts(data);
            })
            .finally(()=>{
                setLoading(false);
            })

    }, [])

    return {products, loading };
}

export default useProducts;