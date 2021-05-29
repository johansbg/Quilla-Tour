import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Forum() {

  return (
    <div className="BgGradientForum">
        <Container className="CenterForum ">
            <ListGroup className="mb-4 centerTextForum">
                <ListGroupItem>
                    <h2>Comunidad de Barranquilla</h2>
                </ListGroupItem>
                
            </ListGroup>
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
                <ListGroupItem>
                    <ListGroupItemHeading>¿Cuales son los mejores lugares para salir de noche?</ListGroupItemHeading>
                    <ListGroupItemText>
                        Descubre la vida nocturna de Barranquilla.
                    </ListGroupItemText>
                </ListGroupItem>
                <div className="d-none d-sm-block centerPagination">
                    <ListGroupItem  className=" mt-5">
                        <Pagination size="lg" aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </ListGroupItem>
                </div>
                <div className="d-none d-block d-sm-none centerPagination">
                    <ListGroupItem  className=" mt-1">
                        <Pagination size="xs" aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </ListGroupItem>
                </div>
                
            </ListGroup>
        </Container>
    </div>
  );
}

export default Forum;
