const Item = ({ product }) => {
    return (
        <li>
            <p>{product.nombre}</p>
            <p>{product.descripcion}</p>
            <p>Quedan: {product.stock}</p>
        </li>
    )
}

export default Item;