import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Detail from './components/Detail';
import AddForm from './components/AddForm';

export default (
  <BrowserRouter>
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddForm} />
          <Route path="/post/:slug" component={Detail} />
      </div>
  </BrowserRouter>
);