import React from "react";
import './BarraNav.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListDeportes from "../Deportes/ListDeportes";
import ListAtletas from "../Atletas/ListAtletas";
import ListEntrenadores from "../Entrenadores/ListEntrenadores";

export default function BarraNav() {
  return (
  
      <Router>
        <div>
          <nav>
            <ul id="button">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deportes">Deportes</Link>
              </li>
              <li>
                <Link to="/atletas">Atletas</Link>
              </li>
              <li>
                <Link to="/entrenadores">Entrenadores</Link>
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
          <Route path="/entrenadores">
            <ListEntrenadores></ListEntrenadores>
          </Route>
        </Switch>

      </Router>
    
  );
}
