import React from 'react';
import Header from './components/header/header.component';
import Drawer from './components/drawer/drawer.component';
import HomePage from './Pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Compose from './components/compose/Compose';
import NewCompose from './components/compose/NewCompose'

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Route exact path="/" component={Drawer} />
=======
      
      <Route exact path="/" component={Sidebar} />
      
>>>>>>> a0f04679694433a40f5cb32420e008c6eab179f6
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
