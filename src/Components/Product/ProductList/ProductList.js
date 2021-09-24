import { Row, Col, Spinner, Button } from "reactstrap";
import { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = (props)=> {
    
    console.log(props,"productList");

    if (props.error) {
        return <div>Error: {props.error.message}</div>;
    } else if (!props.isLoaded) {
        return <div className="spinner">
            <Spinner color="danger" />
        </div>;
    } else {
        return (
            <div>
                {props.items.map((user) => (
                    <div className="container">
                        <Row className="productList">
                            <div key={user.id}></div>
                            <Col><img src={`${user.image}`} width="150" height="300" /></Col>
                            <Col><br/><br/><p className="ProductList__heading">{user.name}</p>
                                <p className="ProductList__details">{user.brand}<br />{user.RAM} GB RAM | {user.ROM}
                                    GB ROM | Expandable upto {user.Expandable} GB<br/> {user.display} Display </p>
                            </Col>
                            <Col><br/><br/><p className="ProductList__cost">&#8377; {user.Cost}</p>
                            <Button className="productList__button" color="success">Purchase Now</Button><br/>
                            <Button className="productList__button" color="warning" >Add to cart </Button>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;