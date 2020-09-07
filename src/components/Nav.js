import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Nav = () => (
  <ul className={styles.navList}>
    <li>
      <NavLink
        className={styles.navLink}
        to="/"
        activeStyle={activeStyle}
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={styles.navLink}
        to="/movies"
        activeStyle={activeStyle}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
