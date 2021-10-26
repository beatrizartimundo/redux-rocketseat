import { IProduct,ActionTypes } from "./types";

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


export function addProductToCartFailure(productId: number){
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}