import React from 'react';
import {FloatingLabel, Col, Row, Container, Form } from 'react-bootstrap';
import WhereInput from "./WhereInput";
import '/scss/_form-check.scss';
import FromInput from "./FromInput";


const HeaderForm = () => {

    return (
        <Container className="container-form px-0">
            <Row>
                {/*Откуда*/}
                <FromInput />
                {/*КУДА*/}
                <WhereInput />

                <Col className="p-0 border-0">
                    <FloatingLabel className="fw-normal text-submit" controlId="floatingInput" label="ВЫЛЕТ">
                        <Form.Control className="rounded-0 shadow-none" placeholder=""/>
                    </FloatingLabel>
                </Col>

                <Col className="p-0">
                    <FloatingLabel className="fw-normal text-submit" controlId="floatingInput" label="НА СКОЛЬКО">
                        <Form.Control className="rounded-0 shadow-none" placeholder=""/>
                    </FloatingLabel>
                </Col>

                <Col className="p-0">
                    <FloatingLabel className="fw-normal text-submit" controlId="floatingInput" label="ТУРИСТЫ">
                        <Form.Control className="select-form-end shadow-none" placeholder=""/>
                    </FloatingLabel>
                </Col>
            </Row>
        </Container>
    )

}

export default HeaderForm;