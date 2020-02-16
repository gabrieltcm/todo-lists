import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//library to generate unique ID for us
import uuid from "uuid";

import './App.css';


class App extends Component {

  state = {
    objectOfTodos: []
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      objectOfTodos: this.state.objectOfTodos.map(abc => {
        if (abc.id === id) {
          abc.completed = !abc.completed
        }
        return abc;
      })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      // ... means spread. SPREAD operator makes a copy
      objectOfTodos: [...this.state.objectOfTodos.filter(x => x.id !== id)]
    })
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ objectOfTodos: [...this.state.objectOfTodos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* this is passing the above objectOfTodos into a property and passing
            it to Todos.js */}
                <Todos objectOfTodos={this.state.objectOfTodos}
                  markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
