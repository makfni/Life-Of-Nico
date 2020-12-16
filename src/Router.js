import React from 'react'
import { Route, Switch } from 'react-router-dom'
import mainPage from './Containers/MainPage/MainPage'
import aboutMe from './Containers/AboutMe/AboutMe'
import photography from './Containers/Photography/Photography'

export default function BaseRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={mainPage} />
                <Route exact path="/about-me" component={aboutMe} />
                <Route exact path="/photography" component={photography} />
            </Switch>
        </div>
    )
}
