import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/">
            </Route>
        </Switch>
    )
}
export default AllRoutes;