import React, { Component } from 'react';
import PropTypes from "prop-types"

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (a) => {
        a.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange} />

                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: "1" }} />
            </form>
        )
    }
}

// this will check if the prop types is right
// if is .array instead of .object, it would
// return an error cause goThroughTodosArr is a single OBJECT
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
