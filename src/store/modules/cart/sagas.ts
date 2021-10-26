import { all, call, put, select, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IState } from "../..";
import api from "../../../services/api";
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSucess } from "./actions";
import { ActionTypes } from "./types";


type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* CheckProductStock({payload}: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;

  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSucess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, CheckProductStock)
])