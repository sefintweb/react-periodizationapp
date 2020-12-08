import { FormGroup } from "@material-ui/core";
import React, { Component } from "react";
import {Card,CardBody, Form, Label, Input } from "reactstrap";

export default class CreateDeporte extends Component {
  render() {
    return (
      <Card>
        <CardBody>
        <Form>
        <FormGroup>
          <Label form="nombre">Deporte</Label>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="nombre del deporte"
          ></Input>
        </FormGroup>
      </Form>
        </CardBody>
      </Card>
      
    );
  }
}
