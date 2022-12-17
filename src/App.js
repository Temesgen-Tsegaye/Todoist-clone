import "./App.css";
import Header from "./components/Header/Header";
import Side from "./components/Side/Side";
import Body from "./components/Body/Body";
import { useState, useEffect, useRef } from "react";
import { useReducer } from "react";
import uniqid from "uniqid";
import { useLayoutEffect } from "react";
import { differenceInDays } from "date-fns";
import db from "./firebaseconfig.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
function App() {
  const [togglettodo, setToggletodo] = useState(false);
  const [formState, setformState] = useState(1);
  const [project, setProject] = useState({ project: "" });
  const [projects, setProjects] = useState([]);
  const [recentyClicked, setRecentlyClicked] = useState("");
  const firstRenderRef = useRef(true);

  const [todo, setTodo] = useState({
    title: "",
    periority: "",
    deadline: "",
    project: "",
    description: "",
    checked: false,
  });

  const [todos, setTodos] = useState([]);
  const [filterddis, setfiltrddis] = useState(todos);

  //intialize using firestore
  async function Initiate() {
    const Proref = await doc(db, "State", "projects");
    const Prodoc = await getDoc(Proref);
    const Prodata = Prodoc.data();
    const Todoref = await doc(db, "State", "todos");
    const Tododoc = await getDoc(Todoref);
    const Tododata = Tododoc.data();
    console.log(Prodata.projects);

    setProjects(Prodata.projects);
    setTodos(Tododata.todos);
  }
  useEffect(() => {
    Initiate();
  }, []);

  const checkChecked = (e) => {
    const updated = todos.map((todo) => {
      if (todo.id === e.target.id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });
    setTodos(updated);
  };
  const handleProject = (e) => {
    setProject({ project: e });
  };
  const handleProjects = () => {
    setProjects([...projects, { ...project, id: uniqid() }]);
  };

  const filtertodos = (id) => {
    const filterd = todos.filter((todo) => {
      return todo.id != id;
    });

    setTodos(filterd);
  };
  const handleTodos = (id) => {
    if (formState == 1) {
      setTodos((prive) => {
        return [...prive, { ...todo, id: uniqid() }];
      });
    } else if (formState == 2) {
      const updated = todos.map((todoss) => {
        if (todoss.id == id) {
          return { ...todo, id: id };
        } else {
          return todoss;
        }
      });

      setTodos(updated);
      setformState(1);
    }
  };
  useLayoutEffect(() => {
    filterdtodosdis();
  }, [todos, recentyClicked]);

  let x = true;  //used as logic for clearing effect on component unmounting 
  useEffect(() => {
   
    if (firstRenderRef.current ) {
      firstRenderRef.current = false;
    } 
     else if (x) {
     
      Persistpro();
      Persisttodo();
    }
    return () => {
      x = false;
    };
  }, [todos, projects]);
  const filterdtodosdis = () => {
    if (recentyClicked == "index") {
      var ee = todos.filter((items) => {
        return items;
      });
    } else if (recentyClicked == "today") {
      ee = todos.filter((items) => {
        return differenceInDays(new Date(items.deadline), new Date()) == 0;
      });
    } else if (recentyClicked == "week") {
      ee = todos.filter((items) => {
        return (
          differenceInDays(new Date(items.deadline), new Date()) <= 7 ||
          differenceInDays(new Date(items.deadline), new Date()) >= 0
        );
      });
    } else {
      ee = todos.filter((items) => {
        return items.project == recentyClicked;
      });
    }
    setfiltrddis(ee);
  };

  //async fun for firebase

  function Persistpro() {
    setDoc(doc(db, "State", "projects"), { projects: projects });
  }
  function Persisttodo() {
    setDoc(doc(db, "State", "todos"), { todos: todos });
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
          // filterdtodosdis={filterdtodosdis}
          setRecentlyClicked={setRecentlyClicked}
          Persistpro={Persistpro}
          Persisttodo={Persisttodo}
        />
        <Body
          projects={projects}
          todo={todo}
          setTodo={setTodo}
          handleTodos={handleTodos}
          todos={todos}
          filterdtodos={filterddis}
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
