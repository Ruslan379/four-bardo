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
import { JS_3_5 } from 'components/JavaScript-Lesson/JS_3-5';
import { React24 } from 'components/React-Lesson/React24';


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
              <p className={css.titleText}>All Matrices</p>
              <PsychoMatrix />
            </div>
          } />
        </Route>

        <Route path="/matrix" element={
          <>
            <p className={css.titleTextBase}>ПсихоМатрица</p>
            <Outlet />
          </>
        } >
          <Route path="psychomatrix" element={
            <div>
              <p className={css.titleText}>PsychoMatrix</p>
              <PsychoMatrix />
            </div>
          } />
        </Route>

        <Route path="/javascript" element={
          <>
            <p className={css.titleTextBase}>Java Script</p>
            <Outlet />
          </>
        } >
          <Route path="module-35" element={
            <div>
              <p className={css.titleText}>Java Script (module_3-5)</p>
              <JS_3_5 />
            </div>
          } />
        </Route>

        <Route path="/react" element={
          <>
            <p className={css.titleTextBase}>React</p>
            <Outlet />
          </>
        } >
          <Route path="module-24" element={
            <div>
              <p className={css.titleText}>React (module_2-4)</p>
              <React24 />
            </div>
          } />
        </Route>

        <Route path="/node" element={
          <>
            <p className={css.titleTextBase}>Node.js</p>
            <Outlet />
          </>
        } >
          <Route path="module-11" element={
            <div>
              <p className={css.titleText}>Node.js (module_1-1)</p>
              {/* <Node11 /> */}
            </div>
          } />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
