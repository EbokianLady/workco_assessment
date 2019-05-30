import React from 'react';
import { connect } from 'react-redux';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import { ReactComponent as Cart } from '../styles/icons/cart.svg';
import { showCart } from '../actions/index';
import '../styles/containers/app.scss';

const App = ({ showCart }) => (
  <div className='app' >
    <header>
      <h2>Acme Store</h2>
      <span className='header-info'>
        <Cart className='cartIcon--header' />
        <h6 onClick={showCart}>Your cart is empty</h6>
      </span>
    </header>
    <hr/>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default connect(null, { showCart })(App)
