import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './Router'
import BarLoader from "react-spinners/BarLoader";
import { css } from '@emotion/react'
import './App.css'

function App() {

  // const override = css`
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
      <div className="content-wrap">
        <Router>
          <BaseRouter />
        </Router>
      </div>
      {/* } */}
    </div>
  );
}

export default App;
