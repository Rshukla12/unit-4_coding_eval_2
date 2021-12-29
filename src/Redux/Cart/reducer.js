import { getData } from "../../utils/LocalStore";
import { constants } from "./actionTypes"

const cart = getData("Cart");

const initState = {
    isLoading: true,
    isError: false,
    cart: cart || []
}

export const cartReducer = ( state=initState, action ) => {
    switch( action.type ){
        case ( constants.ADD_PRODUCT ): {
            return {
                ...state,
                cart: state.cart.push(action.payload.item)    
            }
        }
        
        default: {
            return state;
        }
    }
}

export default cartReducer;