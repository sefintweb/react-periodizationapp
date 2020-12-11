import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  CardFooter,
} from "reactstrap";
import Crud from "../Commons/Crud";

export default class CreatAtleta extends Component {

  calcularEdad(){
    
    var fecha= document.querySelector("fecha");
   console.log(fecha)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs-12>
            <Card>
              <CardHeader>
                <h3>Nuevo Atleta</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="nombres">Nombres:</Label>
                    <Input type="text" id="nombres"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="apellidos">Apellidos: </Label>
                    <Input type="text" id="apellidos"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="fechanac">Fecha Nacimiento: </Label>
                    <Input type="date" id="fechanac" onChange="calcularEdad"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="edad">Edad</Label>
                    <Input type="number" id="nombre" min="1" max="100"></Input>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <center>
                  <Crud></Crud>
                </center>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
