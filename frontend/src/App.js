import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/campaigns" component={Campaigns} />
      </Switch>
    </Router>
  );
};

export default App;
