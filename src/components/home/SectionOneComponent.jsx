import React from "react";

import { Container, Row, Col } from 'reactstrap';
import {
  Button
} from "reactstrap";


function SectionOneComponent(props) {
  
  return (
    <>
    <Container>
      <Row>
        <Col>
          <div className="CardSectionOne">
            <span className="title">
              <strong>BARRANQUILLA</strong>
            </span>
          </div>
          <div className="CardBgSectionOne">
              <span className="message">
                  Descubre esta hermosa cuidad con Quilla Tour el servicio que contiene toda la informacion que necesitas.
              </span>
              <br/>
          </div>
          <div className="Button d-none d-sm-block">
            <Button size="lg" onClick={() => props.fullpageApi.moveSectionDown()}  style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }} > DESCRUBRIR MAS </Button>
          </div>
          <div className="Button d-none d-block d-sm-none">
            <Button onClick={() => props.fullpageApi.moveSectionDown()}  style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }} > DESCRUBRIR MAS </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default SectionOneComponent;
