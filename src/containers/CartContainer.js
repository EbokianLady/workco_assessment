import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout, hideCart } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';
import '../styles/containers/cart.scss';

const CartContainer = ({ products, total, checkout, isVisible, hideCart }) => (
  <Cart
    products={products}
    total={total}
    isVisible={isVisible}
    hideCart={hideCart}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  isVisible: PropTypes.bool,
  checkout: PropTypes.func.isRequired,
  hideCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isVisible: state.cart.visible,
})

export default connect(
  mapStateToProps,
  { checkout, hideCart }
)(CartContainer)
