import { constants } from "./actionTypes"

const initState = {
    isLoading: true,
    isError: false,
    products: []
}

const shopReducer = ( state=initState, action ) => {
    console.log(action)
    switch( action.type ){
        case ( constants.GET_PRODUCT_REQUEST ): {
            return {
                ...state,
                isLoading: true,
                isError: false,
                products: []
            }
        }

        
        case ( constants.GET_PRODUCT_SUCCESS ): {
            return {
                ...state,
                isLoading: false,
                products: action.payload.data 
            }
        }

        
        case ( constants.GET_PRODUCT_FAILURE ): {
            return {
                ...state,
                isLoading: false,
                isError: true 
            }
        }
        
        default: {
            return state;
        }
    }
}

export default shopReducer;