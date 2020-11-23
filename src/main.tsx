import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Main.module.css';

import Header from './header';

const initialState = { pageTitle: '', item: [] };

const reducer = (state, action) => {
    const { pageTitle, item } = state;
    switch (action.type) {
        case 'TITLE':
            return { pageTitle: action.title, item: item };
        case 'ITEM':
            return { pageTitle: pageTitle, item: action.item };
        default:
            throw new Error();
    }
};

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pageTitle, item } = state;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api');
                const data = await res.json();
                dispatch({ type: 'TITLE', title: data.pageTitle });
                dispatch({ type: 'ITEM', item: data.memoItems });
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <Header></Header>
            <Container fluid="xl">
                <Row>
                    <Col as="h1" className={styles.fontWeightBold}>
                        {pageTitle}
                    </Col>
                </Row>
                <Row className={styles.py5}>
                    <Col></Col>
                    <Col xs={12} sm={8}>
                        <Button href="/create" block>
                            新規作成
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col as="table" className={styles.p3}>
                        <Container as="thead" fluid="xl">
                            <Row as="tr" className={styles.bgLight}>
                                <Col as="th" xs={2}>
                                    タイトル
                                </Col>
                                <Col as="th" xs={3}>
                                    作成日
                                </Col>
                                <Col as="th" xs={3}>
                                    更新日
                                </Col>
                                <Col as="th" xs={2}></Col>
                                <Col as="th" xs={2}></Col>
                            </Row>
                        </Container>
                        <MemoContent memoItems={item}></MemoContent>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const MemoContent = ({ memoItems }) => {
    const memoContents = memoItems.map((memo, index) => {
        if (index % 2 === 0) {
            return (
                <Row as="tr" key={memo._id}>
                    <MemoBar
                        id={memo._id}
                        title={memo.title}
                        created={memo.created}
                        modified={memo.modified}
                    ></MemoBar>
                </Row>
            );
        } else {
            return (
                <Row as="tr" key={memo._id} className={styles.bgLight}>
                    <MemoBar
                        id={memo._id}
                        title={memo.title}
                        created={memo.created}
                        modified={memo.modified}
                    ></MemoBar>
                </Row>
            );
        }
    });
    return (
        <Container as="tbody" fluid="xl">
            {memoContents}
        </Container>
    );
};

interface MemoBarType {
    id: string;
    title: string;
    created: string;
    modified: string;
}

const MemoBar = (props: MemoBarType) => (
    <>
        <Col as="td" xs={2}>
            <Link to={`/${props.id}`} className={styles.textPrimary}>
                {props.title}
            </Link>
        </Col>
        <Col as="td" xs={3}>
            {props.created}
        </Col>
        <Col as="td" xs={3}>
            {props.modified}
        </Col>
        <Col as="td" xs={2}>
            <Button href={`/edit/${props.id}`}>編集</Button>
        </Col>
        <Col as="td" xs={2}>
            <Button variant="danger" href={`/delete/${props.id}`}>
                削除
            </Button>
        </Col>
    </>
);

export default Main;
