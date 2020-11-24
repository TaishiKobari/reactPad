import React, { useReducer, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import styles from './Main.module.css';

import Header from './header';

const initialState = {
    pageTitle: '',
    targetMemo: {
        modified: '',
        _id: '',
        title: '',
        memo: '',
        created: '',
    },
};

const reducer = (state, action) => {
    const { pageTitle, targetMemo } = state;
    switch (action.type) {
        case 'TITLE':
            return { pageTitle: action.title, targetMemo: targetMemo };
        case 'TARGETMEMO':
            return { pageTitle: pageTitle, targetMemo: action.targetMemo };
        default:
            throw new Error();
    }
};

const Delete = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pageTitle, targetMemo } = state;

    const { memoId }: any = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://express-pad.herokuapp.com/api/delete/${memoId}`
                );
                const data = await res.json();
                dispatch({ type: 'TITLE', title: data.pageTitle });
                dispatch({ type: 'TARGETMEMO', targetMemo: data.targetMemo });
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [dispatch, memoId]);

    return (
        <>
            <Header></Header>
            <Container>
                <Row>
                    <Col as="h1" className={styles.fontWeightBold}>
                        {pageTitle}
                    </Col>
                </Row>
                <Row>
                    <Col as="hr"></Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant="danger">
                            本当にこのメモを削除しますか？
                        </Alert>
                    </Col>
                </Row>
                <Row as="table">
                    <Col as="tbody">
                        <tr>
                            <td>タイトル</td>
                            <td>{targetMemo.title}</td>
                        </tr>
                        <tr>
                            <td>メモ本文</td>
                            <td>{targetMemo.memo}</td>
                        </tr>
                    </Col>
                </Row>
                <Row>
                    <Col as="hr"></Col>
                </Row>
                <Row>
                    <Col>
                        <Form targetMemo={targetMemo}></Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const Form = ({ targetMemo }) => {
    return (
        <Container
            as="form"
            fluid="xl"
            action={`https://express-pad.herokuapp.com/api/delete/${targetMemo._id}`}
            method="post"
        >
            <Row className={styles.py2}>
                <Col></Col>
                <Col xs={12} sm={8}>
                    <Button variant="danger" type="submit" block>
                        削除
                    </Button>
                </Col>
                <Col></Col>
            </Row>
            <Row className={styles.py2}>
                <Col></Col>
                <Col xs={12} sm={8}>
                    <Button variant="secondary" href="/" block>
                        戻る
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Delete;
