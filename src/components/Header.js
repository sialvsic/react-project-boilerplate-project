import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text && text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos333</h1>
        <TodoTextInput newTodo={ true }
          onSave={ this.handleSave }
          placeholder="What needs to be done?" />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
