import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Jumbotron 
} from "reactstrap";
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function SectionThreeComponent() {
  
    const [validFirstName, setValidFirstName] = React.useState(false);
    const [validLastName, setValidLastName] = React.useState(false);
    const [validEmail, setValidEmail] = React.useState(false);
    const [validMessage, setValidMessage] = React.useState(false);
    
    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'El nombre es requerido';
            setValidFirstName(true);
        } else if (values.firstName.length > 15) {
            errors.firstName = 'El nombre debe ser menor a 15 caracteres';
            setValidFirstName(true);
        } else {
            setValidFirstName(false);
        }
        
        if (!values.lastName) {
            errors.lastName = 'Required';
            setValidLastName(true);
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
            setValidLastName(true);
        } else {
            setValidLastName(false);
        }
        
        if (!values.email) {
            errors.email = 'Required';
            setValidEmail(true);
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
        
        if (!values.message) {
            errors.message = 'Required';
            setValidMessage(true);
        } else if (values.message.length > 200) {
            errors.message = 'Must be 200 characters or less';
            setValidMessage(true);
        } else {
            setValidMessage(false);
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
        <Container>
        <Row>
            <Col md={6}>
                <div>
                <Jumbotron>
                    <h2 className="display-4">QUILLA-TOUR</h2>
                    <p className="lead">Lorem Ipsum is simply dummy text of the s stank a galley o, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <hr className="my-2" />
                    <br/>
                    <p>Barranquilla quien no te conoce te sueña y quien te conoce jamas te olvida.</p>
                    <br/>
                    <Row>
                        <Col md={3}> 
                            <FontAwesomeIcon  icon={faTwitter}/> 
                        </Col>
                        <Col md={3}> 
                            <FontAwesomeIcon  icon={faFacebookSquare}/> 
                        </Col>
                        <Col md={3}> 
                            <FontAwesomeIcon  icon={faGithub}/> 
                        </Col>
                        <Col md={3}> 
                            <FontAwesomeIcon  icon={faLinkedin}/> 
                        </Col>
                    </Row>   
                </Jumbotron>
                </div>
            </Col>
            <Col md={6}>
                <div>
                    <Jumbotron>
                        <h4 className="display-4">Contactanos</h4>
                        <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs="12" md="6">
                            <FormGroup>
                                <Label htmlFor="firstName">Primer Nombre</Label>
                                <Input
                                    invalid={validFirstName} 
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                                {formik.errors.firstName ? <FormFeedback>{formik.errors.firstName}</FormFeedback> : null}
                            </FormGroup>
                            </Col>
                            <Col xs="12" md="6">
                                <FormGroup>
                                    <Label htmlFor="lastName">Apellido</Label>
                                    <Input
                                        invalid={validLastName} 
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                    />
                                    {formik.errors.lastName ? <FormFeedback >{formik.errors.lastName}</FormFeedback> : null}
                                </FormGroup>
                            </Col>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="email">Correo</Label>
                                    <Input
                                        invalid={validEmail} 
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email ? <FormFeedback >{formik.errors.email}</FormFeedback> : null}
                                </FormGroup>
                            </Col>
                            <Col xs="12">
                            <FormGroup>
                                <Label htmlFor="message">Mensaje</Label>
                                <Input
                                    invalid={validMessage} 
                                    id="message"
                                    name="message"
                                    type="textarea"
                                    style={{ height: 90 }}
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                />
                                {formik.errors.message ? <FormFeedback >{formik.errors.message}</FormFeedback> : null}
                            </FormGroup>
                            </Col>
                            <Col xs="12">
                                <Button type="submit" size="lg" style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }}>Submit</Button>
                            </Col>
                            </Row>
                        </Form>
                    </Jumbotron>
                </div>
            </Col>
        </Row>
        </Container>
        </>
    );
}

export default SectionThreeComponent;
