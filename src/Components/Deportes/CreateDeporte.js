import { FormGroup } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  Form,
  Label,
  Input,
  CardFooter,
  CardHeader,
  CardText,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import Crud from "../Commons/Crud";

export default class CreateDeporte extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <CardText>Nuevo Deporte</CardText>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Input type="hidden" id="id"></Input>
                      </FormGroup>

                      <FormGroup>
                        <Label form="nombre">Deporte:</Label>
                        <Input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="nombre del deporte"
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="descripcion">Descripcion :</Label>
                        <Input
                          type="textarea"
                          id="descripcion"
                          name="descripcion"
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="tipo_Dep">Tipo: </Label>
                        <Input type="select" id="tipo_dep">
                          <option value="Resistencia">Resistencia</option>
                          <option value="Fuerza">Fuerza</option>
                          <option value="Velocidad">Velocidad</option>
                        </Input>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Crud></Crud>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </div>
    );
  }
}
