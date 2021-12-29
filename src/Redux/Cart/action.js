import { constants } from "./actionTypes";

export const addProduct = ( item ) => ({
    type: constants.ADD_PRODUCT,
    payload: {
        item
    }
})


export const removeProduct = ( item ) => ({
    type: constants.REMOVE_PRODUCT,
    payload: {
        item
    }
})


export const changeProductQty = ( item ) => ({
    type: constants.CHANGE_QTY_PRODUCT,
    payload: {
        item
    }
})