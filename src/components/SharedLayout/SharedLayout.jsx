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
          <NavLink to="/all/allmatrices">All Matrices</NavLink>
        </div>

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/matrix1">ПСИХО Матрица</NavLink>
          <NavLink to="/matrix1/psychomatrix">PSYCHO Matrix</NavLink>
        </div>

        <div className={css.navBlock} >
          <NavLink className={css.navLink} to="/matrix2">Матрица СУДЬБЫ</NavLink>
          <NavLink to="/matrix2/fate">Matrix of FATE</NavLink>
        </div >

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/matrix3">Матрица ИМЕНИ</NavLink>
          <NavLink to="/matrix3/name">NAME matrix</NavLink>
        </div>

        <div className={css.navBlock}>
          <NavLink className={css.navLink} to="/soul">Старые ДУШИ</NavLink>
          <NavLink to="/soul/oldsoul">Old SOUL</NavLink>
        </div>
      </nav >
      <Outlet />
    </div >
  );
};
