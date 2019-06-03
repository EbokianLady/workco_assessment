import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartInventory = (props) => {
  const { products, total } = props;
  const taxes = (total * 0.07).toFixed(2);
  const grandTotal = (parseFloat(total) + parseFloat(taxes)).toFixed(2);
  const nodes = (
    products.map(product =>
      <CartItem
        product={product}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        removeProductFromCart={props.removeProductFromCart}
        key={product.id}
      />
    )
  )

  return (
    <div className='cartList'>
      {nodes}
      <div className='cartSummary'>
        <span className='row'><h2>Subtotal</h2><h3>${total}</h3></span>
        <span className='row'><h2>Taxes</h2><h3>${taxes}</h3></span>
        <hr />
        <span className='row'><h2>Total</h2><h3>${grandTotal}</h3></span>
      </div>
      <button
        className='updateButton'
        onClick={props.updateCart}>
        Update
      </button>
    </div>
  )
}

CartInventory.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default CartInventory;
