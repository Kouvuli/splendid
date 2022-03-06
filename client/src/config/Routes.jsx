import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../screens/Home/Home';
import Catalog from '../screens/Category/Category';
import MovieDetail from '../screens/Detail/MovieDetail';
const Routes = () => {
    return (
        <Switch>
            
            <Route
                path='/category/:id'
                component={MovieDetail}
            />
            <Route
                path='/category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
