import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Cart/action";



const Products = ({ details, qty=0 }) => {
    const [state, setState] = useState(qty);
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if ( state > 0 ){
            dispatch(addProduct({
                ...details,
                qty: state
            }
            ))
        }

    } 

    return (
        <Box>
            <img src={details.image} alt={details.title} />
            <h1>{details.price}</h1>
            <Button onClick={()=>setState(state=> state>0 ? state-1: state)}>-</Button>
                {state}
            <Button onClick={()=>setState(state+1)}>+</Button>
            <Button onClick={handleAddProduct}>Add</Button>
        </Box>
    )
}

export default Products;