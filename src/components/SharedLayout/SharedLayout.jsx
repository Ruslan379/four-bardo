import styled from '@emotion/styled';

import {
  NavLink,
  Outlet
} from 'react-router-dom';

import { Logo } from 'components/Logo/Logo';

import css from './SharedLayout.module.css';

//------------------------------------------------------------------------------------
console.log("SharedLayout.js:");

//! ---------------------------------------------------------------------------------------

//! Стилизация NavLink
const StyledLink = styled(NavLink)`
  color: #1b1111;
  &.active {
    color: #a56b00;
    text-decoration: underline;
  }
`;

export const SharedLayout = () => {

  return (
    <div className={css.Container}>
      <Logo />

      <NavLink className={css.navLinkHome} to="/">TEMET NOSCE</NavLink>

      <nav className={css.navFlex}>
        <div className={css.navBlock}>
          <StyledLink className={css.navLink} to="/all">ВСЕ РАСЧЕТЫ</StyledLink>
          {/* <NavLink to="/all/allmatrices">All Matrices</NavLink> */}
        </div>

        <div className={css.navBlock}>
          <StyledLink className={css.navLink} to="/matrix1">ПСИХО Матрица</StyledLink>
          {/* <NavLink to="/matrix1/psychomatrix">PSYCHO Matrix</NavLink> */}
        </div>

        <div className={css.navBlock} >
          <StyledLink className={css.navLink} to="/matrix2">Матрица СУДЬБЫ</StyledLink>
          {/* <NavLink to="/matrix2/fate">Matrix of FATE</NavLink> */}
        </div >

        <div className={css.navBlock}>
          <StyledLink className={css.navLink} to="/matrix3">Матрица ИМЕНИ</StyledLink>
          {/* <NavLink to="/matrix3/name">NAME matrix</NavLink> */}
        </div>

        <div className={css.navBlock}>
          <StyledLink className={css.navLink} to="/soul">Старые ДУШИ</StyledLink>
          {/* <NavLink to="/soul/oldsoul">Old SOUL</NavLink> */}
        </div>
      </nav >
      <Outlet />
    </div >
  );
};
