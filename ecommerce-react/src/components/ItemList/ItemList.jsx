import Item from "../Item/Item"
import hocFilterProducts from "../../hoc/hocFilterProducts";

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

const ItemListWithSearch = hocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };
