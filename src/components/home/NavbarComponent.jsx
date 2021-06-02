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
  Button,
  Input
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../../assets/img/Logo.png";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [modal, setModal] = React.useState(false);

  const toggle1 = () => setModal(!modal);

  const [activateUser, setActivateUser] = React.useState(false);

  const codeActivateUser = () => {
    if(activateUser){
      return(
        <>
          <NavItem className=" mr-5">
            <NavLink className="NavItem" to="/Quilla-Tour/Perfil">
              <Button
                outline
                style={{ color: "#f2f2f2", borderColor: "#f2f2f2" }}
                onClick={toggle1}
              >
                {" "}
                Johan Burgos{" "}
              </Button>
            </NavLink>
          </NavItem>
          <NavItem className="mt-2 mr-5">
            <NavLink className="NavItem" onClick={() => ActivateUserButton(false)} to="/">
              <FontAwesomeIcon className="NavItem" icon={faSignOutAlt} />
            </NavLink>
          </NavItem>
        </>
      )
    }else{
      return(
        <>
          <NavItem className=" mr-5">
            <Button
              outline
              style={{ color: "#f2f2f2", borderColor: "#f2f2f2" }}
              onClick={toggle1}
            >
              {" "}
              Iniciar Sesion{" "}
            </Button>
          </NavItem>
        </>
      )
    }
  }

  const ActivateUserButton = () =>{
    setActivateUser(true);
    toggle1()
  }
  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle1}>
          <ModalHeader toggle={toggle1}>Iniciar Sesion</ModalHeader>
          <ModalBody>
            <Input type="email" className="mb-2 " placeholder="Correo"/>
            <Input type="password" placeholder="Contraseña"/>
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }} onClick={() => ActivateUserButton(true)}>Iniciar Sesion</Button>{' '}
            <Button color="secondary" onClick={toggle1}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Navbar className="fixed-top colorNavbar" color={props.color} light expand="lg">
          <NavbarBrand className="ml-2" href="/">
            <img src={logo} alt="Quilla-Tour" height="50" />
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
                <NavLink className="NavItem" to="/Quilla-Tour/Comunidad">Comunidad</NavLink>
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
              {codeActivateUser()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;
