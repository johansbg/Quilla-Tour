import React from "react";

import { Container, Row, Col } from 'reactstrap';
import {
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback 
} from "reactstrap";
import { useFormik } from 'formik';

function SectionThreeComponent(props) {
  
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
            errors.message = 'Must be 20 characters or less';
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
            <Col>
            <div className="CardBgSectionOne">
                <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col xs="12" md="6">
                    <FormGroup>
                        <Label  htmlFor="firstName">Primer Nombre</Label>
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
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        {formik.errors.message ? <FormFeedback >{formik.errors.lastName}</FormFeedback> : null}
                    </FormGroup>
                    </Col>
                    <Col xs="12">
                        <Button type="submit" size="lg" style={{ backgroundColor: "#AAD87F", borderColor:"#AAD87F" }}>Submit</Button>
                    </Col>
                    </Row>
                </Form>
            </div>
            </Col>
        </Row>
        </Container>
        </>
    );
}

export default SectionThreeComponent;
