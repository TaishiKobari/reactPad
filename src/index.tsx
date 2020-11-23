import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './main';
import MemoDetail from './memoDetail';
import Create from './create';
import Edit from './edit';
import Delete from './delete';
import page404 from './page404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:memoId([0-9a-f]{24})" component={MemoDetail} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:memoId([0-9a-f]{24})" component={Edit} />
            <Route path="/delete/:memoId([0-9a-f]{24})" component={Delete} />
            <Route path="/404" component={page404} />
            <Route component={page404} />
        </Switch>
    </Router>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
