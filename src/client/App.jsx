import React, { Component } from 'react';
import {Router} from 'react-router'

class App extends Component {
render (){
  return(
  <Router>
    <Switch>
      <Route exact path='/login' component={} />
    </Switch>
  </Router>
  )
}
}

export default App;
