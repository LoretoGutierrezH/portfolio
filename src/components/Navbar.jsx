import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import burger from '../assets/burgermenu.png';

const Navbar = (props) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const showBurgerContent = () => {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
  }

  
  return (
    <Fragment>
      <nav className={style.navbarMobile}>
        <section className={style.burgerContainer}>
          <section onClick={showBurgerContent} className={style.burgerMenu}>
            <img src={burger} alt="Burger menu icon"/>
          </section>
        </section>
      </nav>
      <section className={style.burgerMenuWrapper}>
          <section className={burgerMenu ? `${style.navlinksContainer} ${style.activeBurger}` :  `${style.navlinksContainer} ${style.inactiveBurger}`}>
            <NavLink to="/sobre-mí" activeClassName={style.selected}>Sobre mí</NavLink>
            <NavLink to="/habilidades" activeClassName={style.selected}>Skills</NavLink>
            <NavLink to="/trabajo" activeClassName={style.selected}>Trabajo</NavLink>
          </section>
        </section>
      <nav className={style.navbarDesktop}>
        <NavLink to="/sobre-mí" activeClassName={style.selected}>Sobre mí</NavLink>
        <NavLink to="/habilidades" activeClassName={style.selected}>Skills</NavLink>
        <NavLink to="/trabajo" activeClassName={style.selected}>Trabajo</NavLink>
      </nav>
    </Fragment>
    
  );
}

export default Navbar;