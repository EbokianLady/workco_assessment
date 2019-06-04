import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addToCart,
  checkout,
  hideCart,
  removeFromCart,
  removeProductFromCart,
  updateCart
} from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';
import '../styles/containers/cart.scss';

const CartContainer = (props) => (
  <Cart
    products={props.products}
    isVisible={props.isVisible}
    total={props.total}
    addToCart={props.addToCart}
    hideCart={props.hideCart}
    onCheckoutClicked={() => props.checkout(props.products)}
    removeFromCart={props.removeFromCart}
    removeProductFromCart={props.removeProductFromCart}
    updateCart={props.updateCart}
  />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    quantity: PropTypes.number.isRequired
  })).isRequired,
  isVisible: PropTypes.bool,
  total: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  hideCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isVisible: state.cart.visible,
})

export default connect(
  mapStateToProps,
  {
    addToCart,
    checkout,
    hideCart,
    removeFromCart,
    removeProductFromCart,
    updateCart
  }
)(CartContainer)
