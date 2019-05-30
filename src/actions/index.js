import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const hideCartUnsafe = () => ({
  type: types.HIDE_CART,
  isVisible: false,
})

export const hideCart = () => (dispatch, getState) => {
  dispatch(hideCartUnsafe());
}

const showCartUnsafe = () => ({
  type: types.SHOW_CART,
  isVisible: true,
})

export const showCart = () => (dispatch, getState) => {
  dispatch(showCartUnsafe());
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
