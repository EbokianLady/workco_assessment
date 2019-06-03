import React from 'react';
import { connect } from 'react-redux';
import CartContainer from './CartContainer';
import ProductsContainer from './ProductsContainer';
import { showCart } from '../actions/index';
import { ReactComponent as CartIcon } from '../styles/icons/cart.svg';
import '../styles/containers/app.scss';

const App = ({ cartItems, showCart }) => {
  const hasProducts = (cartItems.addedIds.length > 0);
  const quantitiesPer = Object.values(cartItems.quantityById);
  const count = quantitiesPer.reduce((acc, el) => acc + el, 0);
  const plural = (count === 1) ? '' : 's';
  const cartText = hasProducts ? (
    `You have ${count} item${plural} in your cart`
  ) : (
    'Your cart is empty'
  );

  return (
    <div className='app' >
      <header>
        <h2>Acme Store</h2>
        <span className='header-info'>
          <CartIcon className='cartIcon--header' />
          <h6
            className='cartButton'
            onClick={showCart}>
              {cartText}
          </h6>
        </span>
      </header>
      <hr/>
      <ProductsContainer />
      <CartContainer />
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart
})

export default connect(mapStateToProps, { showCart })(App)
