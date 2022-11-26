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
    checked:false

  });

  const [todos, setTodos] = useState([]);

  const checkChecked=(e)=>{
    const updated=todos.map((todo)=>{
        if(todo.id==e.target.id){
          return {...todo,checked:!todo.checked}

        }
        else{
          return todo
        }
    })
    setTodos(updated)
    console.log(todos)

  }
  const handleProject = (e) => {
    setProject({ project: e.target.value, id: uniqid() });
  };
  const handleProjects = () => {
    setProjects([...projects, project]);
  };


  const filtertodos=(id)=>{

    const filterd=todos.filter((todo)=>{
      return todo.id!=id
    })

    setTodos(filterd)
    
  
  
  }
  const handleTodos = (id) => {
  
    
    if(formState==1){
      setTodos((prive) => {
        return [...prive, { ...todo, id: uniqid() }];
      });
    
    }
    else if(formState==2){
      const updated=todos.map((todoss)=>{
        if(todoss.id==id){
          
        return {...todo,id:id}
          
        }
        else {
          return todoss
        }
      })
   
    setTodos(updated)
    setformState(1)
      
    }
   
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
          setTodos={setTodos}
          todos={todos}
        />
        <Body
          projects={projects}
          todo={todo}
          setTodo={setTodo}
          handleTodos={handleTodos}
          todos={todos}
          setformState={setformState}
          formState={formState}
          filtertodos={filtertodos}
          checkChecked={checkChecked}
        />
      </div>
    </div>
  );
}

export default App;
