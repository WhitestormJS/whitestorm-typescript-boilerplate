import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Sphere, Cube } from 'containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Cube} />
    <Route path="cube" component={Cube} />
    <Route path="sphere" component={Sphere} />
  </Route>
);
