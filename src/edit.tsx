import React, { useReducer, useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Main.module.css';

import Header from './header';

import { defaultMemo, OneMemoState, OneMemoAction, FormProps } from './type';

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

const reducer: React.Reducer<OneMemoState, OneMemoAction> = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'TITLE':
            return { ...state, pageTitle: payload.pageTitle };
        case 'TARGETMEMO':
            return { ...state, targetMemo: payload.targetMemo };
        default:
            throw new Error();
    }
};

const Edit = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pageTitle, targetMemo } = state;

    const { memoId }: any = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://express-pad.herokuapp.com/api/edit/${memoId}`
                );
                const data = await res.json();
                dispatch({
                    type: 'TITLE',
                    payload: {
                        pageTitle: data.pageTitle,
                        targetMemo: defaultMemo,
                    },
                });
                dispatch({
                    type: 'TARGETMEMO',
                    payload: { pageTitle: '', targetMemo: data.targetMemo },
                });
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
                <Row as="hr"></Row>
                <Row>
                    <Col>
                        <Form targetMemo={targetMemo}></Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const Form: React.FC<FormProps> = ({ targetMemo }) => {
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
        // console.log(values);
        try {
            const init = {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            await fetch(
                `https://express-pad.herokuapp.com/api/edit/${targetMemo._id}`,
                init
            );
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
            action={`https://express-pad.herokuapp.com/api/edit/${targetMemo._id}`}
            method="post"
            onSubmit={handleSubmit}
        >
            <Row as="label" className={styles.py1}>
                タイトル
                <Col
                    as="input"
                    className={styles.ml2}
                    type="text"
                    name="title"
                    placeholder={targetMemo.title}
                    value={title}
                    onChange={handleChange}
                ></Col>
            </Row>
            <Row as="label" className={styles.py1}>
                メモ本文
                <Col
                    as="input"
                    className={styles.ml2}
                    type="text"
                    name="memo"
                    placeholder={targetMemo.memo}
                    value={memo}
                    onChange={handleChange}
                ></Col>
            </Row>
            <Row className={styles.py2}>
                <Col></Col>
                <Col xs={12} sm={8}>
                    <Button type="submit" block>
                        更新
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

export default Edit;
