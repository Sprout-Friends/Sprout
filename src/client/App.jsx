import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SessionProvider from './contexts/sessionContext';
import Dashboard from './containers/DashboardContainer';
import Login from './containers/LoginContainer';
import PlantProfile from './containers/PlantProfileContainer';
import NewPost from './containers/NewPostContainer';
import AccountPageContainer from './containers/AccountPageContainer';
import SearchPage from './containers/SearchContainer';

const App = () => {
  // Enable isLoggedIn for development
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionProvider>
      <div id="app-container">
        <Router>
          {isLoggedIn ? (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/plant/:plantId" component={PlantProfile} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/camera" component={NewPost} />
              {/* <Route exact path='/message' component={} /> */}
              <Route exact path="/account" component={AccountPageContainer} />
              <Route path="*" render={() => <h1>404 - Page Not Found</h1>} />
            </Switch>
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
        </Router>
      </div>
    </SessionProvider>
  );
};

export default App;
