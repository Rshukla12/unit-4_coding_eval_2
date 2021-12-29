import { requestGetProducts, successGetProducts, failGetProducts } from "../Redux/Shop/action"

export const fetchProucts = () => (dispatch) => {
    dispatch(requestGetProducts());
    fetch( "http://localhost:3000/store" )
    .then( res => res.json())
    .then( res => {
        dispatch(successGetProducts(res));
    })
    .catch( err=> {
        console.log(err)
        dispatch( failGetProducts() )
    })
}