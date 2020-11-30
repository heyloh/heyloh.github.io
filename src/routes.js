import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Portfolio} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;