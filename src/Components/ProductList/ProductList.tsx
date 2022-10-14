import { Product as ProductType } from '../../utils/types'
import Product from '../Product/Product';
import './style.css';

type Props = {
  products: ProductType[]
}

const ProductList = (props: Props) => {
  return (
    <div>
      {props.products.map(product =>
        <Product product={product} />
      )}
    </div>
  )
}

export default ProductList