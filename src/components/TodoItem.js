import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            // ? = if completed or if true then "line through"
            // : = else "none"
            textDecoration: this.props.goThroughTodosArr.completed ?
                "line-through" : "none"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* when user clicks the checkbox, it passes the ID by using the bind function */}
                    {/* binds the id to the checkbox */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.goThroughTodosArr.id)} />
                    {/* to have a space between the checkbox and the title */}
                    {" "}
                    {/* this passes the message, that we want to
                    display title, going through the goThroughTodosArr */}
                    {this.props.goThroughTodosArr.title}
                    <button onClick={this.props.delTodo.bind(this, this.props.goThroughTodosArr.id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// this will check if the prop types is right
// if is .array instead of .object, it would
// return an error cause goThroughTodosArr is a single OBJECT
TodoItem.propTypes = {
    goThroughTodosArr: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "pointer",
    float: "right"
}

export default TodoItem
