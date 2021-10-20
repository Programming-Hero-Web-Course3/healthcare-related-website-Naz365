import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

import Login from "./Components/LogIn/Login";
import AboutUs from "./Components/About/AboutUs";
import Footer from "./Components/Header/Footer";
import SignUp from "./Components/SingUp/SignUp";
import AllServices from "./Components/AllServices/AllServices";
import FAQ from "./Components/FAQ/FAQ";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <div className="app">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/allservice/:serviceId">
            <AllServices></AllServices>
          </Route>
          <Route path="/FAQ">
            <FAQ></FAQ>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
