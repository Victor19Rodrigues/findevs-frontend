import React from 'react'

import SignUp from './pages/SignUp'
import LoginPage from './pages/Login'
import Main from './pages/Main'


import history from './history'
import {BrowserRouter, 
        Route, 
        Switch, 
        Redirect} from "react-router-dom"

import {isAuthenticaded} from './services/auth'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
  {...rest}
  render={props =>
  isAuthenticaded() ? (
    <Component {...props} />
  ) : (
    <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )
}
/>
)

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
        <Route exact path='/login' component={() => <LoginPage/> }/>
        <Route exact path="/signup" component={() => <SignUp/>} />
        <PrivateRoute path="/" component={() => <Main/>} />
        <Route path='*' component={() => <h1>404 - Page Not Found</h1>} />
    </Switch>
    </BrowserRouter>
)

export default Routes;