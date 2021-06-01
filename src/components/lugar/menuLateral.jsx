import React from "react";
//Librerias
import { Container, Row, Col } from 'reactstrap';
//Componentes
import CartaSite from "./cartaSite";
import {sites} from "../../shared/sites";

const MenuLateral = (props)  => {
    return(
        <div>
            <Container fluid = {true}>
                <Row className="mt-5 scrolling" id="style-1">
                    {sites.filter(dataSites => dataSites.title.toLocaleLowerCase().includes(props.textoBusqueda.toLocaleLowerCase()) ).map((dataSites, i) => (
                    <Col md={4} key={i} className="mt-5">
                        <CartaSite data={dataSites} urlImg={require('../../assets/'+dataSites.img)}/>
                    </Col>
                    ))} 
                </Row>
            </Container>
        </div>
    );
}


export default MenuLateral;
