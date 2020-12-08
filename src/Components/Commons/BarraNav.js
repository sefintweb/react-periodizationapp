import React from "react";
import "./BarraNav.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListDeportes from "../Deportes/ListDeportes";
import ListAtletas from "../Atletas/ListAtletas";
import ListEntrenadores from "../Entrenadores/ListEntrenadores";
import MenuPlan from "../Plan/MenuPlan";
import { Container, Row, Col } from "reactstrap";

export default function BarraNav() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
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
                  <li>
                    <Link to="/planes">Plan</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>

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
        <Route path="/planes">
          <MenuPlan></MenuPlan>
        </Route>
      </Switch>
    </Router>
  );
}
