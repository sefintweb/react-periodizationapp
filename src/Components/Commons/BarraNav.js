import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListDeportes from "../Deportes/ListDeportes";
import ListAtletas from "../Atletas/ListAtletas";

export default function BarraNav() {
  return (
  
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deportes">Deportes</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/deportes">
            <ListDeportes></ListDeportes>
          </Route>
          <Route path="/atletas">
            <ListAtletas></ListAtletas>
          </Route>
        </Switch>

      </Router>
    
  );
}
