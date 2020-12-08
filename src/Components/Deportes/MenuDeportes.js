import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateDeporte from "./CreateDeporte";
import {Container, Row, Col} from "reactstrap";
import Deportes from "./Deportes";

export default class MenuDeportes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <div>
                <nav>
                  <ul id="button">
                  <li>
                      <Link to="/listDeportes">Ver Deportes</Link>
                    </li>
                    <li>
                      <Link to="/createDeporte">Nuevo Deporte</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>

        

        <Switch>
        <Route path="/listDeportes">
            <Deportes></Deportes>
          </Route>
          <Route path="/createDeporte">
            <CreateDeporte></CreateDeporte>
          </Route>
         
        </Switch>
      </Router>
    );
  }
}
