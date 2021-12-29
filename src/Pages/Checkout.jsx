import { shallowEqual } from "react-redux";
import { useSelector } from "react-redux";
import Products from "../Components/Products";

const Checkout = () => {
    const {cart} = useSelector(state=>state.cart, shallowEqual);
    return (
        <div>
            {
                cart.map( item => ( <Products key={item.id} details={item} qty={item.qty} /> ) )
            }
        </div>
    )
}
export default Checkout;