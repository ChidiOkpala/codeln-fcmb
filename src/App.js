import React from 'react';
import Page from './page/page';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Page}/>
        {/* <Route exact path='/discover' component={Discover}/>
        <Route exact path='/pricing' component={Pricing}/>
        <Route exact path='/sign-up' component={Signup}/> */}
      </Switch>
    </div>
  );
}

export default App;
