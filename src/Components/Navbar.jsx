import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector(state=>state.cart, shallowEqual); 
    const [state, setState] = useState(0);
    useEffect(()=> {
        setState(state=> {
            let res = 0;
            for ( const key in cart ){
                res += cart[key].qty
            }
            return res;
        })
    },[cart])

    return (
        <Toolbar>
            <Link to="/">
                Home
            </Link>
            
            <Link to="/checkout">
                Orders
                <ShoppingCartIcon />
                {state}
            </Link>
        </Toolbar>
    )
}

export default Navbar;