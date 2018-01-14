import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App, Sphere, Cube } from 'containers';

export default (
  <App>
    <Switch>
        <Route exact={true} path="/" component={Cube} />
        <Route path="/cube" component={Cube} />
        <Route path="/sphere" component={Sphere} />
    </Switch>
  </App>
);
