import { Reducer } from "redux";
import { ICartState } from "./types";

const INITAL_STATE: ICartState = {
  items:[]
}

const cart: Reducer<ICartState> = () => {
  return INITAL_STATE
}

export default cart;