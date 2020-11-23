import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const page404 = () => (
    <Container>
        <Row>
            <Col>
                <h3>Page not found.</h3>
            </Col>
            <Col>
                <Link to="/">トップページへ</Link>
            </Col>
        </Row>
    </Container>
);

export default page404;
