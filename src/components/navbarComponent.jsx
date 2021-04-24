import React from "react";
import {
  NavbarBrand,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" color="white" light expand="md">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-5">
              <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem className="mr-5">
              <NavLink to="/">Explora-Barranquilla</NavLink>
            </NavItem>
            <NavItem className="mr-5">
              <NavLink to="/">Comunidad</NavLink>
            </NavItem>
            <NavItem className="mr-5">
              <NavLink to="/">Lenguaje</NavLink>
            </NavItem>
            <NavItem className="mr-5">
              <NavLink to="/">Iniciar Sesion</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
