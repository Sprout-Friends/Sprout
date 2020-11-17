import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/DashboardContainer';
import Login from './containers/LoginContainer';
import { UserContext } from './UserContext';

const App = () => {
  // Enable isLoggedIn for development
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="app-container">
      {isLoggedIn ? (
        <Router>
          <Switch>
            <UserContext.Provider value={value}>
              <Route exact path="/" component={Dashboard} />
              {/* <Route exact path='/search' component={} /> */}
              {/* <Route exact path='/camera' component={} /> */}
              {/* <Route exact path='/message' component={} /> */}
              {/* <Route exact path='/profile' component={} /> */}
              <Route path="*" render={() => <h1>404 - Page Not Found</h1>} />
            </UserContext.Provider>
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
