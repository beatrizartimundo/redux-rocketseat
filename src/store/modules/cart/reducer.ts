import { Reducer } from "redux";
import { ICartState, ActionTypes } from "./types";
import produce from "immer";

const INITAL_STATE: ICartState = {
  items:[]
}

const cart: Reducer<ICartState> = (state = INITAL_STATE,action) => {
  return produce(state,draft => {
    switch(action.type) {
      case ActionTypes.addProductToCartSucess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id,
          );
          if(productInCartIndex >= 0) {
            draft.items.push({
              product,
              quantity:1,
            });
          }
          break;
      }
      default: {
        return draft;
      }
    }
  })
}

export default cart;