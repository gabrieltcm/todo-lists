import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {

    render() {
        //map means going through an array from an array
        return this.props.objectOfTodos.map((goThroughTodosArr) => (
            // passing the property of goThroughTodosArr into TodoItem.js
            // means whatever action stated in TodoItem together with the 
            // goThroughTodosArr will be received here
            <TodoItem key={goThroughTodosArr.id} goThroughTodosArr={goThroughTodosArr}
                markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

// this will check if the prop types is right 
// if is .object instead of .array, it would
// return an error cause objectOfTodos is a list of array
Todos.propTypes = {
    objectOfTodos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
