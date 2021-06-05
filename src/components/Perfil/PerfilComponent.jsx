import React from "react";
import { Container } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Input } from 'reactstrap';
import { Media } from 'reactstrap';

import classnames from 'classnames';
import img from './../../assets/img/backgroundHomeS2-2.jpg';
import mediaImg from './../../assets/img/backgroundHomeS2-1.jpg';

function PerfilComponent() {

    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const data = [{
        "firstname":"Johan",
        "lastname":"Burgos",
    }];

  return (
    <div>
        <Container className="mobileReduccionProfile">
            <div>
                <Jumbotron className="p-4 mb-4 JumbotronProfile">
                    <div className="ProfileImage">
                        <img src={img} alt="Perfil" />
                    </div>
                    <div className="centerItems mt-3">
                        <h2>{data[0].firstname} {data[0].lastname}</h2>
                        <p className="lead">En tu perfil podras ver tus sitios y tus topicos de comunidad favoritos.</p>
                        <hr className="my-2" />
                        <p>Estas usando QuillaTour :D</p>
                        <p className="lead">
                        <Button className="m-0" style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }} color="primary">Editar Perfil</Button>
                        </p>
                    </div>
                </Jumbotron>
            </div>
            <div>
                <Nav tabs >
                    <NavItem >
                    <NavLink
                        style={{ backgroundColor: "#FFFFFF" }}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Sitios Favoritos
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        style={{ backgroundColor: "#FFFFFF" }}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Topicos Favoritos
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1" style={{ backgroundColor: "#FFFFFF" }}>
                        <Row>
                            <Col sm="12">
                                <ListGroup>
                                    <ListGroupItem>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Buscar sitios"
                                            type="text"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Media>
                                            <Media className="imgMedia" left href="#">
                                                <img src={mediaImg} alt="Perfil" />
                                            </Media>
                                            <Media body>
                                                <Media heading>
                                                    El Gran Malecón del Río
                                                </Media> 
                                                <div className="d-none d-sm-block" > 
                                                El Gran Malecón se desarrolla a lo largo de cinco kilómetros de la ribera occidental del río Magdalena y contará con un malecón y una vía en doble calzada paralela al mismo y con conexión con la vía 40 en las calles 79, 72 y 58 y se enlazará en la isla de La Loma y con el Centro de Eventos y Convenciones Puerta de Oro.
                                                </div>  
                                            </Media>
                                        </Media>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2" style={{ backgroundColor: "#FFFFFF" }}>
                        <Row>
                            <Col sm="12">
                                <ListGroup>
                                    <ListGroupItem>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Buscar topicos de interes"
                                            type="text"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading>Donde Puedo Comer</ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Resuelve tus dudas con gente de Barranquilla.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading>Donde puedo ir</ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Mira lo que opina la gente al respecto
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </Container>
    </div>
  );
}

export default PerfilComponent;
