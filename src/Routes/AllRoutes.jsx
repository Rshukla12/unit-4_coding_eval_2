import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
        </Switch>
    )
}
export default AllRoutes;