import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const { qty } = useSelector(state=>state.cart, shallowEqual); 
    return (
        <Toolbar>
            <Link to="/">
                Home
            </Link>
            
            <Link to="/checkout">
                Orders
                <ShoppingCartIcon />
                {qty}
            </Link>
        </Toolbar>
    )
}

export default Navbar;