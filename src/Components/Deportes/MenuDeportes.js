import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateDeporte from "./CreateDeporte";
import {Container, Row, Col} from "reactstrap";

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
                      <Link to="/createDeporte">Nuevo Deporte</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>

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
