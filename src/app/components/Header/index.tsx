import * as React from 'react';
import { Link } from 'react-router';

const style = require('./style.css');

export const Header = () => (
  <nav className={style.Nav}>
    <ul>
      <li><Link to="/">Cube</Link></li>
      <li><Link to="sphere">Sphere</Link></li>
    </ul>
  </nav>
);
