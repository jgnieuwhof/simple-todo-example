import React, { Component } from 'react';

class Todos extends Component {
  state = {
    todos: [],
  }

  addTodo = () => {
    let { todos } = this.state
    let { value: inputValue } = this.todoInput
    this.todoInput.value = ''
    this.setState({ todos: [...todos, inputValue] })
  }

  render() {
    let { todos } = this.state
    return (
      <div className='todos-container'>
        <div>Welcome to todos</div>
        <p>You have { todos.length} todos </p>
        <p>
          Add a todo:
          <input ref={x => this.todoInput = x} />
          <button onClick={this.addTodo}>Add</button>
        </p>
        <ul>
          { todos.map((x,i) => (
            <li key={i}>{ x }</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todos;
