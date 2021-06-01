import React from "react";
//Librerias
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartaSite = (props)  => {
    return(
       <div>
           <Card>
                <CardImg top width="100%" height="200px" src={props.urlImg.default} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.data.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.Subtitle}</CardSubtitle>
                <CardText>{props.data.text}</CardText>
                <Rating
                    placeholderRating={3.5}
                    readonly={true}
                    emptySymbol={<FontAwesomeIcon  icon={["far","star"]} className="colorStar"/>}
                    placeholderSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                    fullSymbol={<FontAwesomeIcon  icon="star" className="colorStar"/>}
                    className="mb-2"
                />
                <br/>
                <Link to={{pathname:"/Quilla-Tour/DescripcionLugar", dataDetalle:{props} }}>
                    <Button size="sm" style={{ backgroundColor: "#343a40", borderColor:"#343a40"}}>Conoce mas</Button>
                </Link>
                </CardBody>
            </Card>
       </div>
    );
}


export default CartaSite;