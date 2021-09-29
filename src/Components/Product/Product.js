import "./Product.css";
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    Button,
    NavLink
} from 'reactstrap';
import ProductList from "./ProductList/ProductList";
import { useState, useEffect } from "react";
import Cart from "./Cart";

const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ram, setRam] = useState(10);
    const [price, setPrice] = useState(100000);
    const [brand, setBrand] = useState("");



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

    const handleFilter = (e, filterType) => {
        console.log(e.target.value, filterType);
        if (filterType === "Ram") {
            // console.log(e.target.value);
            setRam(e.target.value);
        }
        if (filterType === "price") {
            console.log(e.target.value);
            setPrice(e.target.value);
        }
        if (filterType === "brand") {
            console.log(e.target.value);
            setBrand(e.target.value);
        }
    }

    const clearFilters = () => {
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
        const forClear = items;
        console.log("clearFilters", forClear);
        setItems(forClear);
        console.log(items);

    }

    useEffect(() => {
        // console.log("useeffect");
        let filterProducts = items;
        console.log(ram, price, brand);
        if (ram !== 10) {
            filterProducts = filterProducts.filter(products => products.RAM == ram)
        }
        if (price !== "") {
            filterProducts = filterProducts.filter(products => {
                return products.Cost < price;
            })
        }
        if (brand !== "") {
            console.log(brand);
            filterProducts = filterProducts.filter(products => products.brand === brand)
        }
        setItems(filterProducts);
        console.log(filterProducts);
    }, [ram, price, brand])

    return (
        <div >
            <Navbar color="light" light expand="md" >
                <Nav className="product__navbar" navbar>
                    <NavItem className="product__navbar__productNo">Showing {items.length} products &nbsp;&nbsp;&nbsp;| &nbsp;</NavItem>
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            Ram
                        </DropdownToggle>
                        <DropdownMenu right >
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "Ram")} value="2">
                                2 GB
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "Ram")} value="4">
                                4 GB
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "Ram")} value="6">
                                6 GB
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Price
                        </DropdownToggle>
                        <DropdownMenu right >
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "price")} value="10000">
                                less than 10,000
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "price")} value="20000">
                                less than 20,000
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            Brand
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "brand")} value="Realme">
                                Realme
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "brand")} value="Apple">
                                Apple
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "brand")} value="Redmi">
                                Redmi
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="product__navbar__dropdownItem" onClick={(e) => handleFilter(e, "brand")} value="Oppo">
                                Oppo
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    &nbsp;&nbsp;<NavItem className="ms-auto product__navbar__clearFilters" onClick={clearFilters}>Clear Filters &nbsp;&nbsp;&nbsp;| &nbsp;</NavItem>
                </Nav>
            </Navbar>
            <br />
            <ProductList {...props} />
        </div>
    );
}
export default Products;