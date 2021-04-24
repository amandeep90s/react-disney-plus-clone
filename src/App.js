import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/detail/:Id" component={Detail} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
