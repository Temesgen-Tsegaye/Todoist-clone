import Todoform from "../Forms/Todoform";
import { useState } from "react";
import {FaTrash,FaPenSquare} from 'react-icons/fa' 

const Body = ({ projects, todo, setTodo, handleTodos,todos }) => {
  const [toggle, setToggle] = useState(false);

   const todoitem=todos.map((todo)=>{
     return(
       
         <div className='todos'> <input type="checkbox" /> <p>{todo.title}</p> <FaPenSquare className='todoedit'/> <FaTrash className='tododel'/> </div>
       
     )
   })
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
