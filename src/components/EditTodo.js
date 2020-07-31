import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import EditIcon from "@material-ui/icons/Edit";

export default class EditTodo extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {});
    });
  }

  state = {
    content: null,
    id: this.props.id,
    required: true
  };

  handleChange = (textChangeEvent) => {
    this.setState({
      content: textChangeEvent.target.value,
    });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.props.editTodo(this.state.id, this.state.content);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <a href="#editModal" className="modal-trigger white-text">
          <EditIcon />
        </a>

        <div className="modal" id="editModal">
          <div className="modal-content">
            <h2 className="purple-text text-darken-4 center">
              Editing Task...
            </h2>
            <br />
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="editTodoField"
                onChange={this.handleChange}
                value={this.state.content}
              />
            </form>
          </div>
          <div className="modal-footer">
            <a
              href=""
              className="btn purple darken-4 white-text modal-close"
              onClick={this.handleSubmit}
            >
              Edit
            </a>
          </div>
        </div>
      </div>
    );
  }
}
