import React from "react";
import "./MenuPlan.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMacrociclos from "../Macrociclos/CreateMacrociclos";
import { Container, Col, Row } from "reactstrap";

export default function MenuPlan() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <div>
              <nav>
                <ul id="button">
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
          </Col>
        </Row>
      </Container>

      <Switch>
        <Route path="/macrociclos">
          <CreateMacrociclos></CreateMacrociclos>
        </Route>
        <Route path="/mesociclos"></Route>
        <Route path="/microciclos"></Route>
      </Switch>
    </Router>
  );
}
