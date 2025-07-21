import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts.js";
import Loading from "../Loading/Loading";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const ItemListContainer = ({ saludo = "Bienvenido a nuestra tienda" }) => {
    const { category } = useParams();
    const { products, loading } = useProducts(category);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { searchQuery } = useSearch();

    // Función para filtrar productos
    const filterProducts = (productList, query) => {
        if (!query.trim()) {
            return productList;
        }
        
        return productList.filter((product) => {
            const searchTerm = query.toLowerCase();
            return product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm);
        });
    };

    // Actualizar productos filtrados cuando cambian los productos o la búsqueda
    useEffect(() => {
        if (products.length > 0) {
            const filtered = filterProducts(products, searchQuery);
            setFilteredProducts(filtered);
        }
    }, [products, searchQuery]);

    const getDisplayTitle = () => {
        if (searchQuery.trim()) {
            return `Resultados para: "${searchQuery}" (${filteredProducts.length} productos)`;
        }
        return saludo;
    };

    if (loading) {
        return (
            <div className="item-list-container">
                <h2>{saludo}</h2>
                <Loading />
            </div>
        );
    }

    return (
        <div className="item-list-container">
            <h2>{getDisplayTitle()}</h2>
            {filteredProducts.length === 0 && searchQuery.trim() ? (
                <div className="no-results">
                    <p>No se encontraron productos que coincidan con tu búsqueda.</p>
                    <p>Intenta con otros términos o revisa la ortografía.</p>
                </div>
            ) : (
                <ItemList products={filteredProducts} />
            )}
        </div>
    );
};

export default ItemListContainer;