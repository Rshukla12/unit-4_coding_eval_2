import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./Cart/reducer";
import shopReducer from "./Shop/reducer";
import { thunk } from "redux-thunk"
const rootReducer = combineReducers({ shop: shopReducer, cart: cartReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));