import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AddService from './components/Dashboard/AddService/AddService';
import OrderService from './components/Dashboard/OrderService/OrderService';
import GetOrderService from './components/Dashboard/GetOrderService/GetOrderService';
import AccessAdmin from './components/Dashboard/AccessAdmin/AccessAdmin';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ReviewAgency from './components/Dashboard/ReviewAgency/ReviewAgency';
import ErrorPage from './components/ErrorPage/ErrorPage';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/order/:serviceId">
            <OrderService />
          </PrivateRoute>
          <PrivateRoute path="/userService">
            <GetOrderService />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AccessAdmin />
          </PrivateRoute>
          <PrivateRoute path='/serviceList'>
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <ReviewAgency />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
