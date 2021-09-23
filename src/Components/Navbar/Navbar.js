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
              <NavLink  href="/checkout">cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;