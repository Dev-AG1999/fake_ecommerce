import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const incrementCartProduct = () => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export const CartProducts = (products) => {
  return {
    type: ActionTypes.CART,
    payload:products,
  };
};

export const selectedCartProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_CART_PRODUCT,
    payload:product,
  };
};