import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import { ReactComponent as Cart } from '../styles/icons/cart.svg';
import '../styles/containers/app.scss';

const App = () => (
  <div className='app' >
    <header>
      <h2>Acme Store</h2>
      <span className='header-info'>
        <Cart className='cartIcon--header' />
        <h6>Your cart is empty</h6>
      </span>
    </header>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
