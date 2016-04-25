import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import AddressBook from './pages/AddressBook'
import Contacts from './pages/Contacts'
import Layout from './pages/Layout'

const app = document.getElementById('app');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={AddressBook}></IndexRoute>
      <Route path="/contacts" component={Contacts}></Route>
      <Route path="/contacts/:id" component={Contacts}></Route>
    </Route>
  </Router>
), app);
