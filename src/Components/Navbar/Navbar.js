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
        <NavbarBrand center href="/product" className="navbar__navbarBrand">SIB-kart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/product">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/checkout">Checkout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filter
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  1
                </DropdownItem>
                <DropdownItem>
                  2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;