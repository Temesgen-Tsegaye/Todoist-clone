import Todoform from "../Forms/Todoform";
import { useState } from "react";
import { FaTrash, FaPenSquare } from "react-icons/fa";

const Body = ({
  projects,
  todo,
  setTodo,
  handleTodos,
  todos,
  setformState,
  filtertodos,
  checkChecked,
}) => {
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();

  const todoitem = todos.map((todo) => {
    return (
      <div className="todos" key={todo.id} id={todo.id}>
        <input
          type="checkbox"
          id={todo.id}
          onChange={(e) => {
            checkChecked(e);
          }}
          checked={todo.checked}
        />{" "}
        <p style={{textDecoration: todo.checked&&'line-through'}}>{todo.title}</p>
        <FaPenSquare
          onClick={(e) => {
            setformState(2);
            setToggle(true);
            setId(todo.id);
          }}
          className="todoedit"
        />
        <FaTrash
          onClick={(e) => {
            filtertodos(e.currentTarget.parentElement.id);
          }}
          className="tododel"
        />
      </div>
    );
  });
  return (
    <div className="Bodytodo">
      {todoitem}
      {toggle && (
        <Todoform
          projects={projects}
          todo={todo}
          setTodo={setTodo}
          setToggle={setToggle}
          handleTodos={handleTodos}
          id={id}
        />
      )}
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Body;
