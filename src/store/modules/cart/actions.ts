import { IProduct,ActionTypes } from "./types";

export function addProductToCartSucess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSucess,
    payload: {
      product,
    }
  }
}