import shop from '../api/shop';
import * as types from '../constants/ActionTypes';


const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(payload => {
    const products = Object.values(payload.data);
    dispatch(receiveProducts(products));
  });
};

const hideCartUnsafe = () => ({
  type: types.HIDE_CART,
  isVisible: false,
});

export const hideCart = () => (dispatch, getState) => {
  dispatch(hideCartUnsafe());
};

const showCartUnsafe = () => ({
  type: types.SHOW_CART,
  isVisible: true,
});

export const showCart = () => (dispatch, getState) => {
  dispatch(showCartUnsafe());
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
});

export const removeFromCart = productId => (dispatch, getState) => {
  dispatch(removeFromCartUnsafe(productId));
};

const removeProductFromCartUnsafe = (product) => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  product
});

export const removeProductFromCart = (product) => (dispatch, getState) => {
  dispatch(removeProductFromCartUnsafe(product));
};

const updateCartUnsafe = () => ({
  type: types.UPDATE_CART,
});

export const updateCart = () => (dispatch, getState) => {
  dispatch(updateCartUnsafe());
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    });
  });
};
