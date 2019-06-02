import React from 'react';
import PropTypes from 'prop-types';
import CartInventory from './CartInventory';
import { ReactComponent as CloseIcon } from '../styles/icons/close.svg';
import { ReactComponent as CartIcon } from '../styles/icons/cart.svg';

const Cart  = ({ products, total, onCheckoutClicked, isVisible, hideCart }) => {
  const display = isVisible ? '' : 'none';
  const hasProducts = products.length > 0;
  const cart = hasProducts ? (
    <CartInventory
      products={products}
      total={total}
      onCheckoutClicked={onCheckoutClicked}
    />
  ) : (
    <div className='emptyCart'>
      <CartIcon className='emptyCartIcon'/>
      <h5>Please add some products</h5>
      <h5>to your cart.</h5>
    </div>
  );

  return (
    <div
      className='transparency'
      style={{ display: display }}>
      <div className='cart'>
        <header className='cartHeader'>
          <h3>Your Cart</h3>
          <button
            className='closeButton'
            onClick={hideCart}>
            <CloseIcon/>
          </button>
        </header>
        <hr />
        {cart}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  isVisible: PropTypes.bool,
  hideCart: PropTypes.func,
  onCheckoutClicked: PropTypes.func
}

export default Cart
