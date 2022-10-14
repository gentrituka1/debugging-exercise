import { Product as ProductType } from '../../utils/types'
import Product from '../Product/Product';
import './style.css';

type Props = {
  products: ProductType[]
}

const ProductList = ({products}: Props) => {
  return (
    <div>
      {products ? products.map((product: ProductType) =>
        <Product product={product} />
      )
    :
      <p>There are no products</p>}
    </div>
  )
}

export default ProductList