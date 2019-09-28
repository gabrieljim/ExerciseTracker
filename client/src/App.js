import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "./components/Main";
import Users from "./components/Users";
import GoBackButton from "./components/GoBackButton";
import NewUser from "./components/NewUser";
import User from "./components/User";
import NewExercise from "./components/NewExercise";

const NotFound = () => {
  return <h1>404 - The page you requested doesn't exist</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:path" component={GoBackButton} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/users/:user" exact component={User} />
          <Route path="/users/:user/newexercise" component={NewExercise} />
          <Route path="/users" exact component={Users} />
          <Route path="/newuser" component={NewUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
