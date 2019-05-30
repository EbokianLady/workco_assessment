import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import CartItem from './CartItem';

import image1 from '../styles/images/image1.png';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

const Cart  = ({ products, total, onCheckoutClicked, isVisible, hideCart }) => {
  const display = isVisible ? '' : 'none';
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem product={product}></CartItem>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  console.log(isVisible)

  return (
    <div className='transparency' style={{ display: display }}>
      <div className='cart'>
        <button onClick={hideCart}>
          X
        </button>
        <h3>Your Cart</h3>
        <hr />
        <div className='cartList'>
          {nodes}
        </div>
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
