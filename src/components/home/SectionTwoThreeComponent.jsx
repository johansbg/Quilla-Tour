import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {
  Button
} from "reactstrap";
import moment from 'moment';

function SectionOneComponent(props) {
  
    const [day] = React.useState(moment().format('DD'));
    const [month] = React.useState(moment().format('MM'));
    const [year] = React.useState(moment().format('YYYY'));

    return (
        <>
        <Container>
        <Row>
          <Col>
            <div className="CardBgSectionTwo mobileReduccionThree">
              <span className="titleSection2">
                <strong>DESCRUBRE FUTUROS EVENTOS</strong>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="centerText2 mobileReduccionThree">
          <Col xs={6} md={2}>
            <div className="img1 d-none d-sm-block"></div>
          </Col>
          <Col xs={6} md={2}>
            <div className="img2"></div>
          </Col>
          <Col xs={12} md={2}>
            <div className="img3 d-none d-sm-block"></div>
          </Col>
          <Col xs={12} md={2}>
            <div className="img4 d-none d-sm-block"></div>
          </Col>
          <Col xs={12} md={2}>
            <div className="img5 d-none d-sm-block"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="centerText mobileReduccionThree">
              <span className="bgNumber">{day.charAt(0)}</span>
              <span className="bgNumber marginR">{day.charAt(1)}</span>
              <span className="bgNumber marginR">-</span>
              <span className="bgNumber">{month.charAt(0)}</span>
              <span className="bgNumber marginR">{month.charAt(1)}</span>
              <span className="bgNumber marginR">-</span>
              <span className="bgNumber">{year.charAt(0)}</span>
              <span className="bgNumber">{year.charAt(1)}</span>
              <span className="bgNumber">{year.charAt(2)}</span>
              <span className="bgNumber">{year.charAt(3)}</span>
            </div>
          </Col>
          <Col xs={12}>
            <div className="ButtonSec2Three mobileReduccion d-none d-sm-block">
              <Link to="/Quilla-Tour/agenda">
                <Button
                  size="lg"
                  style={{ backgroundColor: "#ffb703", borderColor: "#ffb703" }}
                >
                  {" "}
                  VER EVENTOS Y AGENDA CULTURAL{" "}
                </Button>
              </Link>
            </div>
            <div className="ButtonSec2Three mobileReduccion d-block d-sm-none">
              <Link to="/Quilla-Tour/agenda">
                <Button
                  style={{ backgroundColor: "#ffb703", borderColor: "#ffb703" }}
                >
                  {" "}
                  VER EVENTOS Y AGENDA CULTURAL{" "}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SectionOneComponent;
