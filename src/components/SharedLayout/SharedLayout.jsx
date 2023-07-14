import {
  NavLink,
  Outlet
} from 'react-router-dom';

import { Logo } from 'components/Logo/Logo';

import css from './SharedLayout.module.css';

//------------------------------------------------------------------------------------
console.log("SharedLayout.js:");

//! ---------------------------------------------------------------------------------------



export const SharedLayout = () => {

  return (
    <div className={css.Container}>
      <Logo />

      <NavLink className={css.navLinkHome} to="/">H O M E</NavLink>

      <nav className={css.navFlex}>
        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/all">ВСЕ РАСЧЕТЫ</NavLink>
          <NavLink to="/all/allmatrices">Все Матрицы</NavLink>
        </div>

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/matrix">ПсихоМатрица</NavLink>
          <NavLink to="/matrix/psychomatrix">PsychoMatrix</NavLink>
        </div>

        <div className={css.navBlock} >
          <NavLink className={css.navLink} to="/javascript">Java Script</NavLink>
          <NavLink to="/javascript/module-35">Module_3-5</NavLink>
        </div >

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/react">React</NavLink>
          <NavLink to="/react/module-24">Module_2-4</NavLink>
        </div>

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/node">Node.js</NavLink>
          <NavLink to="/node/module-11">Module_1-1</NavLink>
        </div>
      </nav >
      <Outlet />
    </div >
  );
};
