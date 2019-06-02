import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartInventory = ({ products, total, onCheckoutClicked }) => {
  const taxes = (total * 0.07).toFixed(2);
  const grandTotal = (parseFloat(total) + parseFloat(taxes));
  const nodes = (
    products.map(product =>
      <CartItem product={product} key={product.id} />
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
        className='updateButton'>
        Update
      </button>
    </div>
  )
}

CartInventory.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func.isRequired
}

export default CartInventory;
