import "./App.css";
import Header from "./components/Header/Header";
import Side from "./components/Side/Side";
import Body from "./components/Body/Body";
import { useState } from "react";
import { useReducer } from "react";
import uniqid from "uniqid";
function App() {
  const [togglettodo, setToggletodo] = useState(false);
  const [formState, setformState] = useState(1);
  const [project, setProject] = useState({ project: "", id: "" });
  const [projects, setProjects] = useState([]);

  const [todo, setTodo] = useState({
    title: "",
    periority: "",
    deadline: "",
    project: "",
    description: "",
    
  });

  const [todos, setTodos] = useState([]);
  const handleProject = (e) => {
    setProject({ project: e.target.value, id: uniqid() });
  };
  const handleProjects = () => {
    setProjects([...projects, project]);
  };

 const handleTodos=()=>{
     setTodos((prive)=>{
       return [...prive,{...todo,id:uniqid()}]
     })
     console.log(todos)
 }

  return (
    <div className="App">
      <Header />
      <div className="side_and_body">
        <Side
          project={project}
          handleProject={handleProject}
          handleProjects={handleProjects}
          projects={projects}
          setProjects={setProjects}
        />
        <Body projects={projects} todo={todo} setTodo={setTodo} handleTodos={handleTodos}  todos={todos} />
      </div>
    </div>
  );
}

export default App;
