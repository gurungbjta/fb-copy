import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom'
import ForgotAcc from './components/ForgotAcc';
import Body from './components/Body';
import CreatePage from './components/CreatePage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/forgot" component={ForgotAcc} />
        <Route exact path="/" component={Body} />
        <Route exact path="/createPage" component={CreatePage} />
      </Switch>
    </>
  );
}

export default App;
