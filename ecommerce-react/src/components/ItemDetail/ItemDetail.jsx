import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product = {} }) => {
    const { addProductInCart } = useContext(CartContext);
    const [productAdded, setProductAdded] = useState(false);

    const addProduct = (quantity) => {
        const productCart = { ...product, quantity };
        //añadir el producto al carrito
        addProductInCart(productCart);
        // Mostrar el botón "Ir al carrito"
        setProductAdded(true);
    }

    return (
        <div className="item-detail-container">
            <img className="item-detail-image" src={product.image} alt="" />

            <div className="item-detail-info">
                <p className="item-detail-title">{product.name}</p>
                <p className="item-detail-description">{product.description}</p>
                <p className="item-detail-price">${product.price}</p>
                <ItemCount stock={product.stock} addProduct={addProduct} />
                
                {productAdded && (
                    <Link to="/cart" className="go-to-cart-btn">
                        Ir al carrito
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ItemDetail