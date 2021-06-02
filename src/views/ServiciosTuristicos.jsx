import React from "react";
//Librerias
import { Container, Row, Col } from 'reactstrap';
//Componentes
import NavbarBrand from "../components/home/NavbarComponent";
import logo from "../assets/img/servicioTuristico.jpg";

const ServiciosTuristicos = (props)  => {
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
                        <h2 tag="h3" className="mt-5">
                            Marina Puerto (Puerto Velereo)
                        </h2>
                        <hr/>
                        <h4 tag="h5" className="mb-4 text-muted">
                            Servicios Turisticos en Barranquilla
                        </h4>
                        <br/>
                        <img top width="100%" className="mb-5" src={logo} alt="Card cap" />
                        <p className="text-muted text-justify">
                            A solo 35 minutos de Barranquilla o 90 minutos desde Cartagena, Marina Puerto Velero es un lugar que abre sus puertas a viajeros en búsqueda de una experiencia para reconectarse con la vida a través de la energía que emana entre la tierra y el mar. La diversidad de la naturaleza y el legado cultural que se encuentra en cada rincón del Club Náutico y Resort, convierte un viaje en una experiencia única.
                            Ofrecemos venta y alquiler de amarres entre otras comodidades para navegantes como el mantenimiento de embarcaciones. Contamos con tres espectaculares tipos de alojamiento y nuestros restaurantes ofrecen lo mejor de la gastronomía caribeña.
                        </p>
                    </Col>

                    <Col sm="12" md={{ size: 6, offset: 3 }} className="mt-2 mb-5 p-0">
                    <Row>
                        <Col sm="12"   md="4">
                            <h3  tag="h4" className="text-center">
                                Beneficios en nuestra página
                            </h3>
                            <br/>
                            <p className="text-muted text-justify">
                                Solo por reservas a través de nuestro sitio web, recibes un descuento del 20% en los platos de nuestro restaurante y en las actividades náuticas.
                            </p>
                        </Col>
                        
                        <Col sm="12"  md="4">
                            <h3  tag="h4" className="text-center">
                                Exclusivas Promociones
                            </h3>
                            <br/>
                            <p className="text-muted text-justify">
                                Síguenos en nuestras redes sociales para no perderte nuestras exclusivas promociones y aprovecha el servicio de reservar en el sitio oficial. 
                            </p>
                        </Col>

                        <Col sm="12"   md="4">
                            <h3  tag="h4" className="text-center pb-3">
                                El Mejor Servicio
                            </h3>
                            <br/>
                            <p className="text-muted text-justify pt-3">
                            ¿Te gustaría incluir algo adicional a tu estadía? Gracias a nuestros múltiples canales, te brindamos el mejor servicios por reservas en nuestro sitio web.
                            </p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServiciosTuristicos;