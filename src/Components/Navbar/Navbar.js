import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="navbar" dark expand="md" >
        <NavbarBrand href="/product" className="navbar__navbarBrand">SIB-kart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto container-fluid" navbar>
          <NavItem>
              <NavLink href="/product">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact us</NavLink>
            </NavItem>
            <NavItem className="navbar__cart ms-auto" >
              <NavLink  href="/checkout"><i className="fa fa-shopping-cart"></i> 
              <span className="navbar__cart__state">{cartItems}&nbsp;</span>cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;