import React from 'react';
import { Component } from 'react';

class FormularioCadastro extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button type="submit">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
