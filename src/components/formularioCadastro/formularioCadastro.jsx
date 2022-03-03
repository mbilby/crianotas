import React from 'react';
import { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
    console.log(this.texto);
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form
        action=""
        className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          rows={15}
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button
          type="submit"
          className="form-cadastro_input form-cadastro_submit"
        >
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
