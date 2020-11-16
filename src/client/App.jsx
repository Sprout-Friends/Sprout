import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return(
  <div>
    {/* ADD A COMPONENT FOR LOGIN PAGE RENDERING IF NOT LOGGED IN*/}
    {/* CONDITIONAL ROUTING FOR THE ROUTER OTHERWISE */}
  <Router>
    <Switch>
      {/* CHANGE SO ITS JUST NAV BAR STUFF */}
      <Route exact path='/dashboard' component={} />
      <Route exact path='/search' component={} />
      <Route exact path='/camera' component={} />
      <Route exact path='/message' component={} />
      <Route exact path='/profile' component={} />
    </Switch>
  </Router>
  </div>
  )
};

export default App;
