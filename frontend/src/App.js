import React from 'react';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar';
import HomePage from './Pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Compose from './components/compose/Compose';
import NewCompose from './components/compose/NewCompose'

function App() {
  return (
    <div>
      
      <Route exact path="/" component={Sidebar} />
      
      {/* <Switch>/ */}
      {/* <Route exact path="/" component={HomePage} /> */}
      {/* <Route path="/shop" component={ScheduleMail} />
        <Route exact path="/checkout" component={History} /> */}
      {/* </Switch> */}


      {/* Testing */}
      <Route exact path="/c" component={Compose} />
      <Route exact path="/nc" component={NewCompose} />
    </div>
  );
}

export default App;
