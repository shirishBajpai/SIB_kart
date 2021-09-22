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

const Products = () => {
    return (
        <div className="container">
            <Navbar color="light" light expand="md" >
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Ram
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                1
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            price
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                1
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            brand
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                1
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                2
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            <ProductList />
        </div>
    );
}
export default Products;