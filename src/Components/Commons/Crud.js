import React, { Component } from "react";
import {Button} from 'reactstrap';

export default class Crud extends Component {
  render() {
    return (
      <div>
        <Button type="button" color="success">Save</Button>
        <Button type="button" color="danger">Delete</Button>
        <Button type="reset" color="danger">Cancel</Button>
        <Button type="button" color="info">Search</Button>
      </div>
    );
  }
}
