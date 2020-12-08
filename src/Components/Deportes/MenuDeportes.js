import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateDeporte from "./CreateDeporte";

export default class MenuDeportes extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <nav>
              <ul id="button">
                <li>
                  <Link to="/createDeporte">Nuevo Deporte</Link>
                </li>
              </ul>
            </nav>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>         

          <Switch>
            <Route path="/createDeporte">
              <CreateDeporte></CreateDeporte>
            </Route>
          </Switch>
        </Router>
      
    );
  }
}
