import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ product = {} }) => {

    const { addProductInCart } = useContext(CartContext);


    const addProduct = (quantity) => {
        const productCart = { ...product, quantity };
        //añadir el producto al carrito
        addProductInCart(productCart);
    }


    return (
    <div className="item-detail-container">
        <img className="item-detail-image" src={product.image} alt="" />

        <div className="item-detail-info">
            <p className="item-detail-title">{product.name}</p>
            <p className="item-detail-description">{product.description}</p>
            <p className="item-detail-price">${product.price}</p>
            <ItemCount stock={product.stock} addProduct={addProduct} />
        </div>
    </div>
    )
}

export default ItemDetail