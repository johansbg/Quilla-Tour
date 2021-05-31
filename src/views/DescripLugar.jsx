import React from "react";
//Librerias
import { Container, Row, Col } from 'reactstrap';
//Componentes
import NavbarBrand from "../components/home/NavbarComponent";

const DescripLugar = (props)  => {
    console.log(props.location.dataDetalle.props)
    console.log(props.location.dataDetalle.props.data.descripcion)
    console.log(props.location.dataDetalle.props.urlImg.default)
    return(
        <div>
            <Container fluid = {true}>
                <Row>
                    <Col >
                        <NavbarBrand color={"dark"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md = {6} className="mt-4 p-0">
                       
                    </Col>
                    <Col md = {6}className="mt-4 pr-3 p-0">
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DescripLugar;