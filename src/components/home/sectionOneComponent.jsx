import React from "react";

import { Container, Row, Col } from 'reactstrap';

function sectionOneComponent() {
  return (
    <Container>
      <Row className="center">
        <Col>
          <div className="colorCardGreen">
            <div className="textCardCenter">
              BARRANQUILLA
            </div>
          </div>
        </Col>
        <Col xs="10">
          <div className="colorCardWhite">
            <Row>
              <Col xs="4">
                <div className="textCardWhite1">
                  <p style={{fontSize:"21px"}}>Barranquilla, quien no te conoce sueña contigo, y quien te conoce nunca te olvida</p>  
                  <div className="author">
                    <p style={{fontSize:"14px"}}>--César Paragüita Morales</p> 
                  </div>
                </div>                                  
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs="2">
          <div className="colorCardGreen2">
            <h2></h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default sectionOneComponent;
