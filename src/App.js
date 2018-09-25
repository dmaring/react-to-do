import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: "Walk the cat", isCompleted: true },
        { description: "Throw the dishes away", isCompleted: false },
        { description: "Buy new dishes", isCompleted: false },
      ],
      newTodoDescription: ''
    };
  }

  deleteTodo(index) {
    // create a copy of the todos list to modify
    const todos = this.state.todos.slice();
    // grab the todo to be deleted
    const todo = todos[index];
    let newList;
    if (todo === todos[0]) {
      newList = todos.slice(1, todos.length)
    }
    else {
      newList =
        todos.slice(0, index - 1).join(todos.slice(index, todos.length));
    }
    this.setState({ todos: newList })
  }

  toggleComplete(index) {
    // create a copy of the todos list to modify
    const todos = this.state.todos.slice();
    // grab the todo corresponding to index
    const todo = todos[index];
    // if todo is true -> false, false -> true
    todo.isCompleted = todo.isCompleted ? false : true;
    // set the state of the todos with the new todos list
    this.setState({ todos: todos })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    // pass a new todos list a new array along with the new ToDo
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) }/>
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
