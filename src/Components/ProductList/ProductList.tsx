import { Product as ProductType } from '../../utils/types'
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = (props) => {
  return (
    <div>
      {/* TODO: kill the ? , rename to products */}
      {/* @ts-ignore */}
      {props.products?.map(product =>
        <Product product={product} />
      )}
    </div>
  )
}

export default ProductList