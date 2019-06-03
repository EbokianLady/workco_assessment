import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  RECEIVE_PRODUCTS,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../constants/ActionTypes';

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1
      }
    case REMOVE_PRODUCT_FROM_CART:
      const { product } = action;
      return {
        ...state,
        inventory: state.inventory + product.quantity
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case REMOVE_PRODUCT_FROM_CART:
      const { product } = action;
      return {
        ...state,
        [product.id]: products(state[product.id], action)
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export const getProduct = (state, id) =>
state.byId[id]

export const getVisibleProducts = state =>
state.visibleIds.map(id => getProduct(state, id))

export default combineReducers({
  byId,
  visibleIds
})
