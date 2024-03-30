import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/layout/Navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import NotFound from "./components/pages/notfound";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppNavbar />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                Component={Home}
              />
              <Route
                exact
                path="/about"
                Component={About}
              />
              <Route
                path="*"
                Component={NotFound}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
