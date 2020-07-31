import React from "react";
import DeleteRounded from "@material-ui/icons/DeleteRounded";
import "materialize-css/dist/css/materialize.min.css";
import EditTodo from "./EditTodo";
import "./App.css";

const Todos = ({ todos, deleteTodo, editTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item blue white-text mytodo" key={todo.id}>
          {todo.content}
          <div className="row right">
            <div className="col">
              <a
                href="#"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className="white-text"
              >
                <DeleteRounded />
              </a>
            </div>
            <div className="col">
              <EditTodo
                editTodo={editTodo}
                id={todo.id}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p className="center grey-text">No new tasks for today.</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
