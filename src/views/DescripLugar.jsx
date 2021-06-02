import React from "react";
//Librerias
import { Container, Row, Col } from 'reactstrap';
//Componentes
import NavbarBrand from "../components/home/NavbarComponent";
import Comentarios from "../components/descripLugar/Comentarios"

const DescripLugar = (props)  => {
    return(
        <div>
            <Container fluid = {true}>
                <Row>
                    <Col >
                        <NavbarBrand color={"dark"}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mt-5 mb-5 p-0">
                        <h2 tag="h3" className="mt-5">{props.location.dataDetalle.props.data.title}</h2>
                        <hr/>
                        <h4 tag="h5" className="mb-4 text-muted">{props.location.dataDetalle.props.data.Subtitle}</h4><br/>
                        <img top width="100%" className="mb-5" src={props.location.dataDetalle.props.urlImg.default} alt="Card cap" />
                        <p className="text-muted text-justify">
                            {props.location.dataDetalle.props.data.descripcion}
                        </p>
                    </Col>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-4 pr-3 p-0">
                       <Comentarios comentarios={props.location.dataDetalle.props.data.comentario}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DescripLugar;