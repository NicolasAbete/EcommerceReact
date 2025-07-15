import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({ product = {} }) => {
    return (
    <div className="item-detail-container">
        <img className="item-detail-image" src={product.image} alt="" />

        <div className="item-detail-info">
            <p className="item-detail-title">{product.name}</p>
            <p className="item-detail-description">{product.description}</p>
            <p className="item-detail-price">${product.price}</p>
        </div>
    </div>
    )
}

export default ItemDetail