import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ product }) => {
    // Función para determinar el estilo del stock
    const getStockClass = (stock) => {
        if (stock === 0) return "stock-item out-of-stock";
        if (stock <= 5) return "stock-item low-stock";
        return "stock-item";
    }

    return (
        <li className="item">
            <div className="img-item-container">
            <Link to={ "/detail/" + product.id }>
                <img className="img-item" src={product.image} alt={product.name} />
            </Link>
            </div>
            <div className="text-item"> 
                <p className="title-item">{product.name}</p>
                <p className="description-item">{product.description}</p>
                {product.price && <p className="price-item">${product.price}</p>}
                <p className={getStockClass(product.stock)}>
                    {product.stock === 0 ? "Sin stock" : `Quedan: ${product.stock}`}
                </p>
                {product.freeShipping && <span className="free-shipping">Envío gratis</span>}
            </div>
        </li>
    )
}

export default Item;