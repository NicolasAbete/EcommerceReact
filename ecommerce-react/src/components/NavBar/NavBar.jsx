import { useState, useEffect } from "react";
import "./NavBar.css";
import ecommerceLogo from "../../assets/ecommerceLogo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const NavBar = () => {
    const [inputValue, setInputValue] = useState("");
    const { searchQuery, updateSearchQuery, clearSearch } = useSearch();

    // Sincronizar input con searchQuery del context
    useEffect(() => {
        setInputValue(searchQuery);
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        updateSearchQuery(inputValue);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        
        // Búsqueda en tiempo real
        updateSearchQuery(value);
    };

    const handleClearSearch = () => {
        setInputValue("");
        clearSearch();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Sección de Brand/Logo */}
                <Link to="/">
                <div className="brand-section">
                    <img className="logo" src={ecommerceLogo} alt="Logo" />
                </div>
                </Link>

                
                {/* Sección de Búsqueda */}
                <div className="search-section">
                    <form className="search-container" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Buscar productos, marcas y más..."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="search-button">
                            🔍
                        </button>
                        {inputValue && (
                            <button 
                                type="button" 
                                className="clear-search-button"
                                onClick={handleClearSearch}
                            >
                                ✕
                            </button>
                        )}
                    </form>
                </div>
                
                {/* Categorías */}
                <ul className="categories">
                    <li className="category-item">
                        <Link to="/category/PerifericosGamer"> <a href="" className="category-link">PerifericosGamer</a> </Link>
                    </li>
                    <li className="category-item">
                        <Link to="/category/TVs"> <a href="" className="category-link">TVs</a> </Link>
                    </li>
                    <li className="category-item">
                        <Link to="/category/Tecnologia"> <a href="#" className="category-link">Tecnologia</a></Link>
                    </li>
                </ul>
                
                {/* Sección de Usuario */}
                <div className="user-section">
                    <div className="user-actions">
                        <a href="#" className="user-button">Ingresar</a>
                        <a href="#" className="user-button">Registrarse</a>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;