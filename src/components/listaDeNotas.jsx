import React from 'react';
import { Component } from 'react';
import CardNota from './cardNota';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
      </ul>
    );
  }
}

export default ListaDeNotas;
