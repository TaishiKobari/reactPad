import React, { useReducer, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

const MemoDetail = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pageTitle, targetMemo } = state;

    const { memoId }: any = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://express-pad.herokuapp.com/api/${memoId}`
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
                    <Col as="table">
                        <Container as="tbody">
                            <Row as="tr">
                                <Col as="td" xs={4}>
                                    <strong>タイトル</strong>
                                </Col>
                                <Col as="td" xs={8}>
                                    {targetMemo.title}
                                </Col>
                            </Row>
                            <Row as="tr">
                                <Col as="td" xs={4}>
                                    <strong>メモ本文</strong>
                                </Col>
                                <Col as="td" xs={8}>
                                    {targetMemo.memo}
                                </Col>
                            </Row>
                            <Row as="tr">
                                <Col as="td" xs={4}>
                                    <strong>作成日</strong>
                                </Col>
                                <Col as="td" xs={8}>
                                    {targetMemo.created}
                                </Col>
                            </Row>
                            <Row as="tr">
                                <Col as="td" xs={4}>
                                    <strong>更新日</strong>
                                </Col>
                                <Col as="td" xs={8}>
                                    {targetMemo.modified}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className={styles.py3}>
                    <Col></Col>
                    <Col xs={12} sm={8}>
                        <Button href="/" variant="secondary" block>
                            戻る
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default MemoDetail;
