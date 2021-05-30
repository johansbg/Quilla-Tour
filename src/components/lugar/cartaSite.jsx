import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';

const CartaSite = (props)  => {
    return(
       <div>
           <Card>
                <CardImg top width="100%" height="200px" src={props.urlImg.default} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.data.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.data.Subtitle}</CardSubtitle>
                <CardText>{props.data.text}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
       </div>
    );
}


export default CartaSite;