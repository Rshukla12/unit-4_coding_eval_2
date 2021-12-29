import { Container } from "@mui/material";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchProucts } from "../utils/Api";

const Home = () => {
    const { isLoading, products, isError } = useSelector(state=>state.shop, shallowEqual);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchProucts());
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Something went Wrong</div>
                ) : (
                    <Container>
                        {
                            products.map( item => <div>{item.id}</div>)
                        }
                    </Container>
                )
            }
        </>
    )
}

export default Home;