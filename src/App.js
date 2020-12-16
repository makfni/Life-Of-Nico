import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'
import mainPage from './Containers/MainPage/MainPage'
import aboutMe from './Containers/AboutMe/AboutMe'
import photography from './Containers/Photography/Photography'
// import BarLoader from "react-spinners/BarLoader";
// import { css } from '@emotion/react'
import './App.css'

function reactApp() {

  // const override = css`   , { useState, useEffect }
  //   display: block;
  //   margin: 0 auto;

  // `
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])
  return (
    <Router>
      <div className="page-container">
        {/* {
        loading ?
          <BarLoader
            css={override}
            height={4}
            width={300}
            color={"#123abc"}
            loading={loading}
            style={{ margin: 'auto' }}

          />
          : */}
        <NavBar />

        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/about-me" component={aboutMe} />
          <Route exact path="/photography" component={photography} />
        </Switch>

        {/* } */}
      </div>
    </Router>
  );
}

export default reactApp;
