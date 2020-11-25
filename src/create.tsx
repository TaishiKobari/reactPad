import React, { useState } from 'react';

import { useHistory } from 'react-router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Main.module.css';

import Header from './header';

const Create = () => (
    <>
        <Header></Header>
        <Container fluid="xl">
            <Row>
                <Col as="h1" className={styles.fontWeightBold}>
                    新規メモ作成
                </Col>
            </Row>
            <Row>
                <Col as="hr"></Col>
            </Row>
            <Row>
                <Col>
                    <Form></Form>
                </Col>
            </Row>
        </Container>
    </>
);

const Form = () => {
    let history = useHistory();
    const initialValue = {
        title: '',
        memo: '',
    };
    const [values, setValues] = useState(initialValue);
    const { title, memo } = values;

    const handleSubmit: (
        event: React.FormEvent<HTMLFormElement>
    ) => void = async (e) => {
        e.preventDefault();
        try {
            const init = {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            await fetch('https://express-pad.herokuapp.com/api/new', init);
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
        e
    ) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Container
            as="form"
            fluid="xl"
            action="https://express-pad.herokuapp.com/api/new"
            method="post"
            onSubmit={handleSubmit}
        >
            <Row as="label" className={styles.py1}>
                タイトル
                <Col
                    as="input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    className={styles.ml2}
                ></Col>
            </Row>
            <Row as="label" className={styles.py1}>
                メモ本文
                <Col
                    as="input"
                    type="text"
                    name="memo"
                    value={memo}
                    onChange={handleChange}
                    className={styles.ml2}
                ></Col>
            </Row>
            <Row className={styles.py2}>
                <Col></Col>
                <Col xs={12} sm={8}>
                    <Button block type="submit">
                        登録
                    </Button>
                </Col>
                <Col></Col>
            </Row>
            <Row className={styles.py2}>
                <Col></Col>
                <Col xs={12} sm={8}>
                    <Button href="/" variant="secondary" block>
                        戻る
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Create;
