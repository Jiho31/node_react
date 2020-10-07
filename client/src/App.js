import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  )
}

// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24, // 기본 단위 px
//     padding: '1rem', // 다른 단위 사용 시 문자열로 설정
//   }
//   return (
//     <>
//     {/* 우와앙 주석이다 */}
//     /* {} 없이 쓰면 화면에 나타남 */
//       <Hello name="react" color="red"/>
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//       <Hello />
//     </>
//   );
// }

export default App;
