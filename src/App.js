import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home.js';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Footer from "./Footer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IBywyEAjIG7X6ReTdObYhUvN28ikHSLbD0qvfFw2ST3pR47DjsEmXD69Yq3GveW4RKfzC88fvzlN0GaUSe3Li2Z00yDPEBngb");

function App() {
  // connect datalayer with firebase starts
  const[{},dispatch]= useStateValue();
  useEffect(() => {
    // will only run once when the app component loads 
    auth.onAuthStateChanged( authUser => {
      console.log('the user is >>>', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        // the user just logged out 
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])

  //connnection ends 

  
  return (
    <Router>
      <div className="app">
        <Switch>



          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer/>
          </Route>
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>

          <Route path="/orders">
          <Header />
            <Orders />
            <Footer/>
          </Route>


          <Route path="/login">
            <Login />
          </Route>

          {/* default  */}
          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>






        </Switch>
      </div>
    </Router>

  );
}


export default App;
