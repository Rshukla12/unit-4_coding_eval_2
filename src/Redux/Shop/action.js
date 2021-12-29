import { constants } from "./actionTypes";

export const requestGetProducts = () => {
    return {
        type: constants.GET_PRODUCT_REQUEST,
        payload: {
            isLoading: true
        }
    }
}
export const successGetProducts = ( data ) => {
    
    return {
        type: constants.GET_PRODUCT_SUCCESS,
        payload: {
            isLoading: false,
            data: data
        }
    }
}
export const failGetProducts = () => ({
    type: constants.GET_PRODUCT_FAILURE,
    payload: {
        isLoading: false
    }
})
