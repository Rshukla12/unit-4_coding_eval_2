import { shallowEqual } from "react-redux";
import { useSelector } from "react-redux";
import Products from "../Components/Products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
    const {cart} = useSelector(state=>state.cart, shallowEqual);
    const [state, setState] = useState(0);
    

    useEffect(()=>{
        setState(state=> {
            let res = 0;
            for ( const key in cart ){
                res += (cart[key].qty * cart[key].price);
            }
            return res;
        })
    }, [cart])
    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map( item => ( <Products key={item.id} details={item} qty={item.qty} /> ) )
            }
            <h2>total-{state}</h2>
            <Link to="/">Checkout</Link>
        </div>
    )
}
export default Checkout;