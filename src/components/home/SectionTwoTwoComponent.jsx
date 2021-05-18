import React from "react";

import { Container, Row, Col } from 'reactstrap';
import {
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

function SectionTwoTwoComponent(props) {
  
  return (
    <>
    <Container>
      <Row>
        <Col>
          <div className="CardBgSectionTwoTwo">
            <span className="titleSection2Two">
              <strong>EXPLORA LA HISTORIA</strong>
            </span>
          </div>
        </Col>
      </Row>
      <Row className="sectionContentTwo">
        <Col xs={{ size: 12, order: 2}} md={{ size: 6, order: 1}}>
            <div className="CardBgSectionTwoTextTwo mobileReduccionTwo">
                <span className="text">
                <strong>¿Sabias que?</strong> Hoy Barranquilla es la cuarta ciudad más importante de Colombia con 1,148,506 habitantes, cuenta con 75 Hoteles y 3.743 Habitaciones.
                </span>
                <br/>
            </div>
            <div className="ButtonSec2Two mobileReduccionTwo d-none d-sm-block" >
              <Link to="/Quilla-Tour/InformacionDeLaCiudad">
                <Button size="lg" style={{ backgroundColor: "#ffb703", borderColor:"#ffb703" }} > EXPLORAR MAS INFORMACIÓN DE LA CIUDAD</Button>
              </Link>
            </div>
            <div className="ButtonSec2Two mobileReduccionTwo d-block d-sm-none" >
              <Link to="/Quilla-Tour/InformacionDeLaCiudad">
                <Button style={{ backgroundColor: "#ffb703", borderColor:"#ffb703" }} > EXPLORAR MAS INFORMACIÓN DE LA CIUDAD</Button>
              </Link>
            </div>
        </Col>
        <Col xs={{ size: 12, order: 1}} md={{ size: 6, order: 2}}>
            <div className="CardImageBorderTwo mobileReduccionTwo">
                <div className="CardImageContentTwo">
                    <div dangerouslySetInnerHTML={{ __html: '<iframe class="videoIframeSec2" src="https://www.youtube.com/embed/jf_vYcmTrcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>'}} />
                </div>
            </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}
export default SectionTwoTwoComponent;
