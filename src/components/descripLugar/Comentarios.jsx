import React, { useState } from "react";
//Librerias 
import { Media,Card, CardText, CardBody,CardTitle,Collapse, Button, } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
//componentes
import logo from "./../../assets/img/blob.jpg";
const Comentarios = (props)  => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   
    const comentarios = props.comentarios
    const subComentarios = (comentario) => {
        if(comentario.subComentario != undefined){
            return(
                <div>
                    <Button color="dark" size="sm" onClick={toggle} style={{ marginBottom: '1rem' }}>Comentarios</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                            {comentario.subComentario.map((comentarios, i) => (
                                <CardText className="pb-2">
                                    <Media>
                                        <Media left href="#" className="pr-3">
                                            <Media object src={logo} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media tag="h5" heading>
                                                {comentarios.user}
                                            </Media>
                                            {comentarios.comment}
                                        </Media>
                                        <Rating
                                            placeholderRating={comentarios.rating}
                                            readonly={true}
                                            emptySymbol={<FontAwesomeIcon  icon={["far","star"]} className="colorStar"/>}
                                            placeholderSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                                            fullSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                                            className="mb-2"
                                        />
                                    </Media>                                  
                                </CardText>
                            ))}

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            );
        }
    }

    return(
        <div>
           <Card>                
                <CardBody>
                    <CardTitle tag="h4">Comentarios</CardTitle>  
                    <hr/>        
                   {comentarios.map((comentarios, i) => (
                        <CardText>
                            <Media>
                                <Media left href="#" className="pr-3">
                                    <Media object src={logo} alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media tag="h5" heading>
                                        {comentarios.user}
                                    </Media>
                                    {comentarios.comment}
                                    <div className="pt-2">
                                        {subComentarios(comentarios)}
                                    </div>                                
                                </Media>
                                <Rating
                                    placeholderRating={comentarios.rating}
                                    readonly={true}
                                    emptySymbol={<FontAwesomeIcon  icon={["far","star"]} className="colorStar"/>}
                                    placeholderSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                                    fullSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                                    className="mb-2"
                                />
                            </Media>
                        </CardText>
                    ))}
    
                </CardBody>
            </Card>
        </div>
    );
}

export default Comentarios;