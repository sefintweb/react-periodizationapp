import React from "react";
import './Plan.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMacrociclos from "../Macrociclos/CreateMacrociclos";

export default function PlanDashboard() {
  return (
    <Router>
      <div>
          
        <nav>
          <ul id="dashboard">
            <li>
              <Link to="/macrociclos">Macrociclos</Link>
            </li>
            <li>
              <Link to="/mesociclos">Mesociclos</Link>
            </li>
            <li>
              <Link to="/microciclos">Microciclos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/macrociclos">
          <CreateMacrociclos></CreateMacrociclos>
        </Route>
        <Route path="/mesociclos"></Route>
        <Route path="/microciclos">
          
        </Route>
      </Switch>
    </Router>
  );
}
