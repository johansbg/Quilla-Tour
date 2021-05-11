import React from "react";
import {
  NavbarBrand,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/Logo.png';

function NavbarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Navbar className="fixed-top colorNavbar"  light expand="lg">
        <NavbarBrand className="ml-2" href="/"><img src={logo} alt="Quilla-Tour" height="50" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mt-2 mr-5">
              <NavLink className="NavItem" to="/">Inicio</NavLink>
            </NavItem>
            <NavItem className="mt-2 mr-5">
              <NavLink className="NavItem" to="/Quilla-Tour/prueba">Explora-Barranquilla</NavLink>
            </NavItem>
            <NavItem className="mt-2 mr-5">
              <NavLink className="NavItem" to="/">Comunidad</NavLink>
            </NavItem>
            <Dropdown className="mr-5" nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                <FontAwesomeIcon className="NavItem" icon="language"/> 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Español</DropdownItem>
                <DropdownItem>Ingles</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem  className=" mr-5">
            <Button outline style={{ color:"#f2f2f2" ,borderColor:"#f2f2f2" }} > Iniciar Sesion </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
