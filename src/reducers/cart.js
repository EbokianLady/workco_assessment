import {
  ADD_TO_CART,
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  HIDE_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
  SHOW_CART,
  UPDATE_CART
} from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state = initialState.addedIds, action) => {
  const { product, productId } = action;
  let index;

  switch (action.type) {
    case ADD_TO_CART:
      index = state.indexOf(productId);
      if (index !== -1) {
        return state;
      }
      return [ ...state, productId ];
    case REMOVE_PRODUCT_FROM_CART:
      index = state.indexOf(product.id);
      state.splice(index, 1);
      return state;
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  const { productId, product } = action;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [productId]: (state[productId] || 0) + 1 }
    case REMOVE_FROM_CART:
      const newQuantity = state[productId] - 1;
      if (newQuantity > 0) {
        return { ...state, [productId]: newQuantity }
      } else {
        delete state[productId];
        return state;
      }
    case REMOVE_PRODUCT_FROM_CART:
      delete state[product.id];
      return state;
    default:
      return state;
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_FAILURE:
      return action.cart
    case CHECKOUT_REQUEST:
      return initialState
    case HIDE_CART:
      return { ...state, visible: action.isVisible }
    case SHOW_CART:
      return { ...state, visible: action.isVisible }
    case UPDATE_CART:
      const values = Object.keys(state.quantityById).map(num => parseInt(num));
      return { ...state, addedIds: values }
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        visible: state.visible
      }
  }
}

export default cart;
