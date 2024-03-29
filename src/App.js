import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
      <Router>
          <Route exact path="/">
              <Navbar />
              <Homepage />
          </Route>
          <Route path="/home">
              <Navbar />
              <Homepage />
          </Route>
          <Route path="/login">
              <Navbar />
              <Login/>
          </Route>
          <Route path="/sign-up">
              <Navbar />
              <SignUp/>
          </Route>
          <Route path="/dashboard">
              <Navbar />
              <Dashboard/>
          </Route>
      </Router>
  );
}

export default App;
