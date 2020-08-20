import React from 'react';
import Page from './page/page';
import Modules from './module/module';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Page}/>
        <Route exact path='/module' component={Modules}/>
      </Switch>
    </div>
  );
}

export default App;
