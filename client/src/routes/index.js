import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../redux/actions/history';

import WarningView from '../components/common/WarningView'
const Error404 = () => <WarningView.Error40X errCode={404} errMsg={'你访问的界面不见了'}/>;

class Homes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route component={Error404}/>
        </Switch>
      </Router>
    );
  }
}

export default Homes;