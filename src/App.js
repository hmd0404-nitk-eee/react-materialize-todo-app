import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodoForm from "./AddTodoForm";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./components/App.css";

export default class App extends Component {
  componentDidMount() {
    this.displayDateDay();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {});
    });
  }

  state = {
    todos: [{ id: 1, content: "Create a basic funtioning app" }],
    noOfTasks: 1,
    previousId: 1,
    date: null,
  };

  addNewTodo = (todo) => {
    todo.id = this.state.previousId + 1;
    let todos = [...this.state.todos, todo];
    let newNoOfTasks = this.state.noOfTasks + 1;

    this.setState({
      todos: todos,
      previousId: todo.id,
      noOfTasks: newNoOfTasks,
    });
  };

  editTodo = (id, editedTodoString) => {
    let todos = [...this.state.todos];

    for (let i = 0; i < this.state.noOfTasks; i++) {
      if (todos[i].id === id) {
        todos[i].content = editedTodoString;
        break;
      }
    }

    this.setState({
      todos: todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    let newNoOfTasks = this.state.noOfTasks - 1;

    this.setState({
      todos: todos,
      noOfTasks: newNoOfTasks,
    });
  };

  displayDateDay = () => {
    let current = new Date();
    let stringAns = "";
    switch (current.getDay()) {
      case 0:
        stringAns = "Sun";
        break;
      case 1:
        stringAns = "Mon";
        break;
      case 2:
        stringAns = "Tue";
        break;
      case 3:
        stringAns = "Wed";
        break;
      case 4:
        stringAns = "Thru";
        break;
      case 5:
        stringAns = "Fri";
        break;
      case 6:
        stringAns = "Sat";
    }
    stringAns =
      stringAns +
      " " +
      (current.getMonth() + 1) +
      "/" +
      current.getDate() +
      ", " +
      current.getFullYear();

    console.log(stringAns);
    this.setState({
      date: stringAns,
    });
  };

  render() {
    return (
      <div className="App container">
        <div className="">
          <div className="row">
            <div className="col s12 l12">
              <h1 className="center purple darken-4 white-text test">
                Todo's Web App with a Carousel
              </h1>
            </div>
            <div className="col s6 l8">
              <h5 className="purple-text text-darken-4">{this.state.date}</h5>
            </div>
            <div className="col s4 l2 push-l2">
              <h6 className="grey-text">
                You have {this.state.noOfTasks} Tasks
              </h6>
            </div>
            <div className="col l12 s12">
              <div class="carousel">
                <a class="carousel-item" href="#one!">
                  <img src="https://lorempixel.com/250/250/nature/1" />
                </a>
                <a class="carousel-item" href="#two!">
                  <img src="https://lorempixel.com/250/250/nature/2" />
                </a>
                <a class="carousel-item" href="#three!">
                  <img src="https://lorempixel.com/250/250/nature/3" />
                </a>
                <a class="carousel-item" href="#four!">
                  <img src="https://lorempixel.com/250/250/nature/4" />
                </a>
                <a class="carousel-item" href="#five!">
                  <img src="https://lorempixel.com/250/250/nature/5" />
                </a>
              </div>
            </div>
            <div className="col s12 l12">
              <Todos
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            </div>
            <div className="col s12 l12">
              <AddTodoForm addNewTodo={this.addNewTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
