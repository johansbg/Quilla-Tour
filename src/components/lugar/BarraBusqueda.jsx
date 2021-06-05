import React from "react";
//Librerias
import {NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Button,InputGroup, InputGroupAddon, InputGroupText, Input} from "reactstrap";
import { NavLink } from "react-router-dom";
//Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Componentes


function BarraBusqueda(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    
    function handleInputChange(event) {
        props.setBusqueda(event.target.value);
    }
    return (
        <div>
        <Navbar className="fixed-top colorNavbar" color={props.color} light expand="lg">
            <NavbarBrand className="ml-2">
                <InputGroup >
                    <Input className="sizeBar" placeholder="Buscar Lugares" onChange={handleInputChange}/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <FontAwesomeIcon  icon="search"/>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem className="mt-2 mr-5">
                <NavLink className="NavItem" to="/">
                    Inicio
                </NavLink>
                </NavItem>
                <NavItem className="mt-2 mr-5">
                <NavLink className="NavItem" to="/Quilla-Tour/explora">
                    Explora-Barranquilla
                </NavLink>
                </NavItem>
                <NavItem className="mt-2 mr-5">
                <NavLink className="NavItem" to="/Quilla-Tour/ServiciosTuristicos">Servicios Turisticos</NavLink>
                </NavItem>
                <Dropdown
                className="mr-5"
                nav
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                >
                <DropdownToggle nav caret>
                    <FontAwesomeIcon className="NavItem" icon="language" />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Español</DropdownItem>
                    <DropdownItem>Ingles</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                <NavItem className=" mr-5">
                <Button
                    outline
                    style={{ color: "#f2f2f2", borderColor: "#f2f2f2" }}
                >
                    {" "}
                    Iniciar Sesion{" "}
                </Button>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default BarraBusqueda;
