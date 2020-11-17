import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/DashboardContainer';
import Login from './containers/LoginContainer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="app-container">
      <p>App</p>
      {isLoggedIn ? (
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path='/search' component={} /> */}
            {/* <Route exact path='/camera' component={} /> */}
            {/* <Route exact path='/message' component={} /> */}
            {/* <Route exact path='/profile' component={} /> */}
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
