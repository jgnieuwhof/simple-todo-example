import React, { Component } from 'react';

const Todo = ({ value }) => {
  return (
    <li>{ value }</li>
  )
}

class Todos extends Component {
  state = {
    todos: [],
  }

  addTodo = () => {
    let { value } = this.todoInput
    this.todoInput.value = ''
    this.setState({
      todos: [...this.state.todos, value],
    })
  }

  render() {
    let { todos } = this.state
    return (
      <div className='todos-container'>
        <div>Welcome to todos</div>
        <p>You have { todos.length } todos!</p>
        <div>
          Add a todo:
          <input ref={x => this.todoInput = x} />
          <button onClick={this.addTodo}>Add!</button>
        </div>
        <div>
          <ul>
            { todos.map(x => <Todo key={x} value={x} />) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Todos;
