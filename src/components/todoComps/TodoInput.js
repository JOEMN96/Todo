import React, { useState, useRef, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

function TodoInput({ addTodo }) {
  const [todo, settodo] = useState("");
  const [warning, setwarning] = useState(false);
  let ipField = useRef();
  let pTag = useRef();
  const handelSub = (e) => {
    e.preventDefault();
    let val = e.target.todoIp.value;
    let { current } = ipField;
    if (!val) {
      current.style.border = "1px solid red";
      pTag.current.innerText = "Todo Required";
      settodo("");
      setwarning(true);
      return;
    } else {
      current.style.border = "1px solid #ddd";
      setwarning(false);
      settodo(val);
      let payLoad = {
        todo: val,
        id: Math.round(Math.random() * 100),
      };
      // here
      addTodo(payLoad);
      e.target.todoIp.value = "";
      pTag.current.innerText = "Sucessfully Added !";
      pTag.current.style.display = "block";
      pTag.current.classList.add("sucessAdd");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      pTag.current.style.display = "none";
    }, 2000);
  }, [todo]);

  return (
    <div className="Input">
      <form onSubmit={handelSub}>
        <div className="ipFieldWIthSub">
          <input
            ref={ipField}
            type="text"
            name=""
            id="todoIp"
            placeholder="Todo"
          />
          <button className="addTodo" type="submit">
            <AddIcon />
          </button>
        </div>
        <p ref={pTag} className={warning ? "Emptywarning" : "sucessAdd"}></p>
      </form>
    </div>
  );
}

let mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (data) => dispatch({ type: "ADD__TODO", data }),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
