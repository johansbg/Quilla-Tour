import React from "react";

import { Container, Row, Col } from 'reactstrap';
import {
  Button
} from "reactstrap";
import img from './../../assets/img/backgroundHomeS2-2.jpg';

function SectionTwoOneComponent(props) {
  
  return (
    <>
    <Container>
      <Row>
        <Col>
          <div className="CardBgSectionTwo">
            <span className="titleSection2">
                SITIOS TURISTICOS Y CULTURALES
            </span>
          </div>
        </Col>
      </Row>
      <Row className="sectionContent">
        <Col xs="12" md="6">
            <div className="CardImageBorder mobileReduccion">
                <div className="CardImageContent">
                    <img src={img} alt="Quilla-Tour" />
                </div>
            </div>
        </Col>
        <Col xs="12" md="6">
            <div className="CardBgSectionTwoText mobileReduccion">
                <span className="text">
                Sin duda, la ciudad tiene muchos atractivos, por eso Quilla Tour te invita a conocer sitios turísticos y culturales de Barranquilla en tu siguiente paseo.
                </span>
                <br/>
            </div>
            <div className="ButtonSec2 mobileReduccion">
                <Button onClick={() => props.fullpageApi.moveSectionDown()} size="lg" style={{ backgroundColor: "#ffb703", borderColor:"#ffb703" }} > EXPLORA LOS SITIOS TURISTICOS Y CULTURALES </Button>
            </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default SectionTwoOneComponent;
