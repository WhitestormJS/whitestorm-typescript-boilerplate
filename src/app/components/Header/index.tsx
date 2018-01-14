import * as React from 'react';
import { Link } from 'react-router-dom';

const style = require('./style.css');

export const Header = () => (
  <nav className={style.Nav}>
    <ul>
      <li><Link to="/cube">Cube</Link></li>
      <li><Link to="/sphere">Sphere</Link></li>
    </ul>
  </nav>
);
