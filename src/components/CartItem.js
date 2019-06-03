import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import '../styles/components/cartItem.scss';
import { ReactComponent as AddIcon } from '../styles/icons/add.svg';
import { ReactComponent as SubtractIcon } from '../styles/icons/subtract.svg';

import image1 from '../styles/images/image1.png';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

const CartItem = ({ product, quantity }) => (
  <div className='cartItem'>
    <div className='cartTop'>
      <img className='cartItemImage' src={productImages[product.id]} alt='' />
      <div className='cartInfo'>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id} />
        <button
          className='removeButton'
          // onClick={onAddToCartClicked}
          >
          Remove
        </button>
      </div>
    </div>
    <div className='cartBottom'>
      <button className='subtractButton'>
        <SubtractIcon />
      </button>
      <h3 className='quantity'>{quantity}</h3>
      <button className='addButton'>
        <AddIcon />
      </button>
    </div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default CartItem
