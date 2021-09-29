import { Row, Col, Spinner, Button } from "reactstrap";
import { useState, useEffect } from "react";
import "./ProductList.css";
import Cart from "../Cart";
import Purchase from "../Purchase";

const ProductList = (props) => {
    const [yourCart, setYourCart] = useState([]);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    const addCart = (id, name, cost, image) => {
        console.log(id);
        setYourCart([...yourCart, { id: id, name: name, Cost: cost, image: image }]);
        setCartItemsNumber(yourCart.length +1);
    }

    const prop = {
        yourCart,
        cartItemsNumber,
        setYourCart,
        setCartItemsNumber
    }

    if (props.error) {
        return <div>Error: {props.error.message}</div>;
    } else if (!props.isLoaded) {
        return <div className="spinner">
            <Spinner color="danger" />
        </div>;
    } else {
        return (
            <div><i className="fa fa-shopping-cart"></i>
            <span className="navbar__cart__state">({cartItemsNumber})&nbsp;</span><Cart {...prop} />
                {props.items.map((user) => (
                    <div key={user.id} className="container">
                        <Row className="productList">
                            <div ></div>
                            <Col xs="3"><img src={`${user.image}`} width="150" height="300" /></Col>
                            <Col><br /><br /><p className="ProductList__heading">{user.name}</p>
                                <p className="ProductList__details">{user.RAM} GB RAM | {user.ROM}
                                    GB ROM | Expandable upto {user.Expandable} GB<br /> {user.display} Display </p>
                            </Col>
                            <Col xs="3"><br /><br /><p className="ProductList__cost">&#8377; {user.Cost}</p>
                                <Button className="productList__button" color="success" >Purchase Now</Button><br />
                                <Button className="productList__button" color="warning" onClick={(e) => addCart(user.id, user.name, user.Cost, user.image)} >Add to cart </Button>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;