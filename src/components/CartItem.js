import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { ReactComponent as AddIcon } from '../styles/icons/add.svg';
import { ReactComponent as SubtractIcon } from '../styles/icons/subtract.svg';
import '../styles/components/cartItem.scss';

import image1 from '../styles/images/image1.png';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

const CartItem = ({ product, addToCart, removeFromCart, removeProductFromCart }) => {
  return (
    <div className='cartItem'>
      <div className='cartTop'>
        <img className='cartItemImage' src={productImages[product.id]} alt='' />
        <div className='cartInfo'>
          <Product
            title={product.productTitle}
            price={product.price.value}
            quantity={product.quantity || 0}
            key={product.id} />
          <button
            className='removeButton'
            onClick={() => removeProductFromCart(product)}>
            Remove
          </button>
        </div>
      </div>
      <div className='cartBottom'>
        <button
          className='subtractButton'
          disabled={product.quantity > 0 ? '' : 'disabled'}
          onClick={() => removeFromCart(product.id)}>
          <SubtractIcon />
        </button>
        <h3 className='quantity'>{product.quantity || 0}</h3>
        <button
          className='addButton'
          disabled={product.inventory > 0 ? '' : 'disabled'}
          onClick={() => addToCart(product.id)}>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    inventory: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired
}

export default CartItem;
