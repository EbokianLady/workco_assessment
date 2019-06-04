import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

import image1 from '../styles/images/image1.png';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

const ProductItem = ({ product, addToCart }) => (
  <div className='productItem'>
    <img className='productImage' src={productImages[product.id]} alt='' />
    <div className='productInfo'>
      <Product
        title={product.productTitle}
        price={product.price.value}
        quantity={1}
        inventory={product.inventory} />
      <button
        className='productButton'
        onClick={() => addToCart(product.id)}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    inventory: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductItem
