import "./Product.css";
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import ProductList from "./ProductList/ProductList";
import { useState, useEffect } from "react";

const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/product/list")
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

    const props = {
        error,
        isLoaded,
        items
    }
    return (
        <div >
            <Navbar color="light" light expand="md" >
                <Nav className="mr-auto" className="product__navbar" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Ram
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="product__navbar__dropdownItem">
                                2 GB
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem">
                                4 GB
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            price
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="product__navbar__dropdownItem" >
                                less than 10,000
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem">
                                10,000-20,000
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            brand
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="product__navbar__dropdownItem">
                                realme
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem">
                                apple
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            <br />
            <ProductList {...props} />
        </div>
    );
}
export default Products;