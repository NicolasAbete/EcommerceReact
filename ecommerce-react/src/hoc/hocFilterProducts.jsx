import { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";

const hocFilterProducts = (Component) => {
    return function FilteredComponent({ searchQuery = "", ...props }) {
        const [query, setQuery] = useState("");
        const { products, loading } = useProducts();

        // Actualizar query interno cuando cambia searchQuery desde props
        useEffect(() => {
            setQuery(searchQuery.toLowerCase());
        }, [searchQuery]);

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase());
        };
        
        const search = (productList) => {
            if (!query.trim()) {
                return productList;
            }
            
            const filterProducts = productList.filter((product) => {
                return product.name.toLowerCase().includes(query) ||
                        product.description.toLowerCase().includes(query);
            });

            return filterProducts;
        };
            
        return (
            <>
                <div className="search-container-hoc">
                    <input 
                        type="text" 
                        placeholder="Buscar producto..." 
                        onChange={changeInput}
                        value={query}
                        className="search-input-hoc"
                    />
                </div>
                <Component 
                    products={search(products)} 
                    loading={loading}
                    {...props}
                />
            </>
        );
    };
};

export default hocFilterProducts;