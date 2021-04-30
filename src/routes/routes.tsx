import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import Home from './home';
import Register from './register';
import Login from './login';
import RecoverPassword from './RecoverPassword';
import NewBet from './newbet';
import useTGL from './../hooks/useStore';


// To do private route to access the new bet page !

const Routes = () => {

    const { states } = useTGL()

    return (
        <BrowserRouter>
            <Switch>
                {/* {states.Auth.isAuth ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/" to="/login" />
                }
                {states.Auth.isAuth ?
                    <Redirect exact from="/login" to="/" /> :
                    <Redirect exact from="/new-bet" to="/login" />
                } */}
                <Route exact path="/" render={props => <Home />} />
                <Route exact path="/login" render={props => <Login />} />
                <Route exact path="/new-bet" render={props => <NewBet />} />
                <Route exact path="/register" render={props => <Register />} />
                <Route exact path="/reset-password" render={props => <RecoverPassword />} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;