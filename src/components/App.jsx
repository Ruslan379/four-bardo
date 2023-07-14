// import {
//   useState,
//   useEffect
// } from 'react';

import {
  Route,
  Routes,
  // Link,
  // NavLink,
  Outlet
} from 'react-router-dom';

// import { useParams } from "react-router-dom";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'components/Home/Home';
import { NotFound } from "page/NotFound";

import { PsychoMatrix } from 'components/PsychoMatrix/PsychoMatrix';
// import { JS_3_5 } from 'components/JavaScript-Lesson/JS_3-5';
// import { React24 } from 'components/React-Lesson/React24';


import css from './App.module.css';

//------------------------------------------------------------------------------------
console.log("App.js:");



export const App = () => {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />

        <Route path="/all" element={
          <div>
            <p className={css.titleTextBase}>ВСЕ РАСЧЕТЫ:</p>
            <Outlet />
          </div>
        } >
          <Route path="allmatrices" element={
            <div>
              <p className={css.titleText}>All Matrices:</p>
              <PsychoMatrix />
            </div>
          } />
        </Route>

        <Route path="/matrix1" element={
          <>
            <p className={css.titleTextBase}>ПСИХО Матрица:</p>
            <Outlet />
          </>
        } >
          <Route path="psychomatrix" element={
            <div>
              <p className={css.titleText}>PSYCHO Matrix:</p>
              <PsychoMatrix />
            </div>
          } />
        </Route>

        <Route path="/matrix2" element={
          <>
            <p className={css.titleTextBase}>Матрица СУДЬБЫ:</p>
            <Outlet />
          </>
        } >
          <Route path="fate" element={
            <div>
              <p className={css.titleText}>Matrix of FATE:</p>
              {/* <JS_3_5 /> */}
            </div>
          } />
        </Route>

        <Route path="/matrix3" element={
          <>
            <p className={css.titleTextBase}>Матрица ИМЕНИ:</p>
            <Outlet />
          </>
        } >
          <Route path="name" element={
            <div>
              <p className={css.titleText}>NAME matrix:</p>
              {/* <React24 /> */}
            </div>
          } />
        </Route>

        <Route path="/soul" element={
          <>
            <p className={css.titleTextBase}>Старые ДУШИ:</p>
            <Outlet />
          </>
        } >
          <Route path="oldsoul" element={
            <div>
              <p className={css.titleText}>Old SOUL:</p>
              {/* <Node11 /> */}
            </div>
          } />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
