import React, { Component, Fragment } from "react";
import CreatAtleta from "./CreatAtleta";

export default class ListAtletas extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <p>Listado de atletas</p>
          <ul>
              <li>Atleta 1</li>
          </ul>
        </div>
        <div>
          <CreatAtleta></CreatAtleta>
        </div>
      </Fragment>
    );
  }
}
