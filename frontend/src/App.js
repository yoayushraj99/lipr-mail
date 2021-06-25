import React from 'react';
import Header from './components/header/header.component';
import HomePage from './Pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      {/* <Switch>/ */}
      {/* <Route exact path="/" component={HomePage} /> */}
      {/* <Route path="/shop" component={ScheduleMail} />
        <Route exact path="/checkout" component={History} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
