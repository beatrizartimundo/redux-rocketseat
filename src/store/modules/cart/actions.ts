import { IProduct,ActionTypes } from "./types";

export function addProductToCart(product: IProduct){
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  }
}

export function addProductToCartSucess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSucess,
    payload: {
      product,
    }
  } 
}

export function addProductToCartRequest(product: IProduct){
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}


export function addProductToCartFailure(product: IProduct){
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      product,
    }
  }
}