import { getData, saveData } from "../../utils/LocalStore";
import { constants } from "./actionTypes"

const cart = getData("Cart");

const initState = {
    cart: cart || []
}

export const cartReducer = ( state=initState, action ) => {
    switch( action.type ){
        case ( constants.ADD_PRODUCT ): {
            const cart = [...state.cart, action.payload.item];
            saveData("Cart", cart);
            return {
                ...state,
                cart: cart
            }
        }

        case ( constants.REMOVE_PRODUCT ): {
            const cart = state.cart.filter(item => item.id !== action.payload.item.id);
            saveData("Cart", cart);
            return {
                ...state,
                cart: cart
            }
        }
        
        case ( constants.CHANGE_QTY_PRODUCT ): {
            const cart = state.cart.map(item => {
                if ( item.id === action.payload.item.id ){
                    item.qty = action.payload.item.qty
                }
                return item;
            })
            saveData("Cart", cart);
            return {
                ...state,
                cart: cart
            }
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;