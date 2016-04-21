import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from './pages/Layout'
import AddressBook from './pages/AddressBook'
import Contacts from './pages/Contacts'

const app = document.getElementById('app');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={AddressBook}></IndexRoute>
      <Route path="contacts" component={Contacts}></Route>
    </Route>
  </Router>
), app);
