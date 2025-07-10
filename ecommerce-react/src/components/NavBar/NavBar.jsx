import "./NavBar.css";
import ecommerceLogo from "../../assets/ecommerceLogo.png"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de búsqueda
        console.log("Buscando...");
    };

    return(
        <nav className="navbar">
            <div className="navbar-container">
                {/* Sección de Brand/Logo */}
                <div className="brand-section">
                    <img className="logo" src={ecommerceLogo} alt="Logo" />
                    <a href="#" className="brand-text">TechStore</a>
                </div>
                
                {/* Sección de Búsqueda */}
                <div className="search-section">
                    <form className="search-container" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Buscar productos, marcas y más..."
                        />
                        <button type="submit" className="search-button">
                            🔍
                        </button>
                    </form>
                </div>
                
                {/* Categorías */}
                <ul className="categories">
                    <li className="category-item">
                        <a href="#" className="category-link">Electrónicos</a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-link">Ropa</a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-link">Hogar</a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-link">Deportes</a>
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
    )
}

export default NavBar;