import "./Item.css"

const Item = ({ product }) => {
    return (
        <li className="item">
            <div className="img-item-container">
                <img className="img-item" src={product.image} alt="" />
            </div>
            <div className="text-item"> 
            <p className="tittle-item">{product.name}</p>
            <p className="description-item">{product.description}</p>
            <p></p>
            <p>Quedan: {product.stock}</p>
            </div>
        </li>
    )
}

export default Item;