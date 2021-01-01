import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { connect } from "react-redux";

function TodoContainer({ todos = [] }) {
  if (todos.length === 0) {
    return (
      <div className="todoContainer">
        <TodoInput />
        <p className="alldone"> All Todos Are Done ..! </p>
      </div>
    );
  }

  return (
    <div className="todoContainer">
      <TodoInput />
      {todos &&
        todos.map((todo) => {
          return <TodoList todo={todo.todo} id={todo.id} key={todo.id} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoContainer);
