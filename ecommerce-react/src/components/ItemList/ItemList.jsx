import Item from "../Item/Item"

const ItemList = ({ products = [] }) => {
    return (
        <ul className="products-grid">
            {
                products.map((product)=>(
                    <Item product={product} key={product.id} />
                ))
            }
        </ul>
    )
}

export default ItemList