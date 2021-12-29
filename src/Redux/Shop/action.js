import { constants } from "../Cart/actionTypes";

export const requestGetProducts = () => ({
    type: constants.GET_PRODUCT_REQUEST,
    payload: {
        isLoading: true
    }
})
export const successGetProducts = ( data ) => ({
    type: constants.GET_PRODUCT_SUCCESS,
    payload: {
        isLoading: false,
        data
    }
})
export const failGetProducts = () => ({
    type: constants.GET_PRODUCT_FAILURE,
    payload: {
        isLoading: false
    }
})
