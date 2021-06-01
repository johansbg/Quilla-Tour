import React from "react";
//Librerias
import { Container, Row, Col } from 'reactstrap';
//Componentes
import BarraBusqueda from "../components/lugar/BarraBusqueda";
import MenuLateral from "../components/lugar/menuLateral";
import Mapa from "../components/lugar/Mapa";

function Lugar() {
    const [textoBusqueda, setTextoBusqueda] = React.useState("");
    const setBusqueda = texto =>(
        setTextoBusqueda(texto)
    );
    return (
        <div>
            <Container fluid = {true}>
                <Row>
                    <Col >
                        <BarraBusqueda color={"dark"} setBusqueda={setBusqueda}/>
                    </Col>
                </Row>
                <Row>
                    <Col md = {6} className="mt-4 p-0">
                        <MenuLateral textoBusqueda={textoBusqueda}/>
                    </Col>
                    <Col md = {6} className="mt-4 pr-3 p-0">
                        <Mapa textoBusqueda={textoBusqueda}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Lugar;