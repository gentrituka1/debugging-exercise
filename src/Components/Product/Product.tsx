import { useState } from 'react'
import { Product as ProductType } from '../../utils/types'
import useProduct from './useProduct';
import './style.css';

type Props = {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const { handleToggleFold, isUnfolded } = useProduct();

  return (
    <div
      key={product.id}
      className="product"
      role='button'
      // TODO: break
      onClick={() => handleToggleFold()}
    >
      <div className="product__content">
        <img src={product.thumbnail} alt={product.title} />
        <p>
          {product.title}
        </p>
      </div>

      {isUnfolded ? <span>{product.description}</span> : <p>'More...'</p>}
    </div>
  )
}

export default Product