import NavBar from "../Navbar/Navbar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Contact from "../Contact/Contact";
import Products from "../Product/Product";

const Home = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/product">
                        <Products />
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Home;
