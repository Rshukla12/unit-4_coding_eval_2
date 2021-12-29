import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, changeProductQty, removeProduct } from "../Redux/Cart/action";



const Products = ({ details, qty=0 }) => {
    const [state, setState] = useState(qty);
    const dispatch = useDispatch();


    useEffect(()=> {
        state === 0 && dispatch(removeProduct({
            ...details
        }))
    }, [state])
    const handleAddProduct = () => {
        if ( state > 0 && qty === 0 ){
            dispatch(addProduct({
                ...details,
                qty: state
            }))
        }
        else if ( state > 0 ){
            dispatch(changeProductQty({
                ...details,
                qty: state
            }))
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