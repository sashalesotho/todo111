import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    //чтобы не перезагружал страницу
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form
        className="item-add-form d-flex"
        //2) поймать момент когда пользователь отправляет форму, передаем значение из поля ввода - новый item
        onSubmit={this.onSubmit}
      >
        <h1>todos</h1>

        <input
          //1)чтобы получать текущее значение инпута используем событие onChange, каждый раз когда значение инпута меняется, вызываем функцию onLabelChange и используя объект event, достаем из него текущее значение поля
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
