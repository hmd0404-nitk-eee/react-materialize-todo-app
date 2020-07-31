import React, { Component } from 'react'


export default class AddTodoForm extends Component {
    state = {
        content: null
    }

    handleInputTextFieldChange = (textfieldChangedEvent) => {
        this.setState({
            content: textfieldChangedEvent.target.value
        })
    }

    handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="new-todo-task-textfield" onChange={this.handleInputTextFieldChange} value={this.state.content} />
                        <label htmlFor="new-todo-task-textfield">Enter your new Task</label>
                    </div>
                </form>
            </div>
        )
    }
}
