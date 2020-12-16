import React from 'react';
import ReactDOM from 'react-dom';
import app from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import aboutMe from './Containers/AboutMe/AboutMe'
import photography from './Containers/Photography/Photography'
import mainPage from './Containers/MainPage/MainPage';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={mainPage} />
      <Route exact path="/about-me" component={aboutMe} />
      <Route exact path="/photography" component={photography} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
