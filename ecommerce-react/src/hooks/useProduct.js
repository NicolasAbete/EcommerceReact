import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProduct = async () => {
        if (!productId) {
            setError('ID de producto no válido');
            setLoading(false);
            return;
        }

        try {
            setError(null);
            const docRef = doc(db, "products", productId);
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() };
                setProduct(data);
            } else {
                // El producto no existe
                setProduct({});
                setError('Producto no encontrado');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError('Error al cargar el producto');
            setProduct({});
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct();
    }, [productId]);

    return { product, loading, error };
};

export default useProduct;