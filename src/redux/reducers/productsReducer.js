import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

const intialStateCount = {
 count: 0,
};

const cartPtroducts = {
  products: [],
 };
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const incrementProductsReducer = (state = intialStateCount, { type }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.INCREMENT:
      return { count:state.count+1 };
  
    default:
      return state;
  }
};

export const cartproductsReducer = (state = cartPtroducts, { type, payload }) => {
  switch (type) {
    case ActionTypes.CART:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedCartProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_CART_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};