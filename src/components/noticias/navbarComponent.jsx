import React from "react";
import {
  NavbarBrand,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import logo from './../../assets/img/Logo.png'
import Historia from './Historia'
import MostrarNoticias from './MostrarNoticias'
import MostrarAnuncios from './MostrarAnuncios'
import Informacion from "../../views/Informacion";

function NavbarComponent () {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Router>
                <div>
                    {/* <Navbar className="fixed-top" color="white" light expand="md"> */}
                    <Navbar className="fixed-top" style={{backgroundColor: '#cf8128'}} light expand="md">
                    <NavbarBrand className="ml-2" href="/"><img src={logo} alt="Quilla-Tour" height="50" /></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="mr-5">
                                    <a href="/Quilla-Tour" style={{color: 'white'}}>Inicio</a>
                                </NavItem>
                                <NavItem className="mr-5">
                                    <NavLink to="/Quilla-Tour/InformacionDeLaCiudad2/MostrarNoticias" style={{color: 'white'}}>Noticias</NavLink>
                                </NavItem>
                                <NavItem className="mr-5">
                                    <NavLink to="/Quilla-Tour/InformacionDeLaCiudad2/Historia" style={{color: 'white'}}>Historia</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 overflow-auto d-none d-sm-block">
                            <MostrarAnuncios/>       
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-6">
                           <Switch>
                                <Route path="/Quilla-Tour/InformacionDeLaCiudad2/MostrarNoticias">
                                    <MostrarNoticias/>
                                </Route>
                                <Route path="/Quilla-Tour/InformacionDeLaCiudad2/Historia">
                                    <Historia/>
                                </Route>    
                                
                                <MostrarNoticias/>
                            </Switch>

                        </div>
                    </div>
                </div>
                
            </Router>
        </div>
    );
};

export default NavbarComponent;