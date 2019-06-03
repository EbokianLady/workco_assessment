import React from 'react';
import PropTypes from 'prop-types';
import CartInventory from './CartInventory';
import { ReactComponent as CloseIcon } from '../styles/icons/close.svg';
import { ReactComponent as CartIcon } from '../styles/icons/cart.svg';

const Cart  = (props) => {
  const hasProducts = props.products.length > 0;
  const display = props.isVisible ? '' : 'none';
  const buttonStyle = hasProducts ? '' : 'none';
  const cart = hasProducts ? (
    <CartInventory
      products={props.products}
      total={props.total}
      addToCart={props.addToCart}
      onCheckoutClicked={props.onCheckoutClicked}
      removeFromCart={props.removeFromCart}
      removeProductFromCart={props.removeProductFromCart}
      updateCart={props.updateCart}
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
            onClick={props.hideCart}>
            <CloseIcon/>
          </button>
        </header>
        <hr />
        {cart}
        <button
          className='checkoutButton'
          style={{ display: buttonStyle }}
          onClick={props.onCheckoutClicked}>
          CHECKOUT
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  isVisible: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
  hideCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default Cart
