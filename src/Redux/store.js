import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { cartReducer } from "./Cart/reducer";
import shopReducer from "./Shop/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ shop: shopReducer, cart: cartReducer });

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));