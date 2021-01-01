import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";

function TodoList({ todo, removeTodo }) {
  const handeleRemove = () => {
    removeTodo();
  };

  return (
    <>
      <div className="Singlelist">
        <p>{todo}</p>
        <CloseIcon onClick={handeleRemove} className="closeIcon" />
      </div>
    </>
  );
}

let mapDispatchToProps = (dispatch, ownprops) => {
  let { id } = ownprops;
  return {
    removeTodo: () => dispatch({ type: "REMOVE__TODO", payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
