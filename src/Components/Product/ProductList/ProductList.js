import { Row, Col, Spinner } from "reactstrap";
import { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result.employee);
                    setItems(result.employee);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="spinner">
      <Spinner color="danger" />
        </div>;
    } else {
        return (
            <div>
                {items.map((user) => (
                    <div className="container">
                        <Row className="productList">
                            <div key={user.id}></div>
                            <Col><img src="phone1.png" width="150" height="225" /></Col>
                            <Col><p className="ProductList_heading">{user.name}</p>
                                <p className="ProductList_details">{user.brand}<br />{user.RAM}<br />{user.ROM}<br />{user.Expandable}</p>
                            </Col>
                            <Col><p className="ProductList_cost">{user.Cost}</p></Col>
                        </Row>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;