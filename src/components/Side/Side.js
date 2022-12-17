import { FaTrash } from "react-icons/fa";
import Projectform from "../Forms/Projectform";
import { useState } from "react";
const Side = ({
  setRecentlyClicked,
  handleProject,
  handleProjects,
  project,
  projects,
  setProjects,
  setTodos,
  todos,
 
}) => {
  const [togglep, setTogglep] = useState(false);

  const filterProject = (e) => {
    const id = e.currentTarget.parentElement.id;
    const pro = e.currentTarget.id;

    const filterd = projects.filter((pro) => {
      return pro.id !== id;
    });
    const filterdtodo = todos.filter((todo) => {
      return todo.project !== pro;
    });

    setProjects(filterd);
    setTodos(filterdtodo);
  };

  const projectList = projects.map((project) => {
    return (
      <div
        key={project.id}
        foo={project.project}
        onClick={() => {setRecentlyClicked(project.project)}}
        id={project.id}
        className="project"
      >
        {project.project}{" "}
        <FaTrash
          id={project.project}
          onClick={(e) => {
            filterProject(e);
          }}
        />
      </div>
    );
  });
  return (
    <div className="side">
      <div className="static-button-container">
        <button onClick={() => {setRecentlyClicked('index');}}>index</button>
        <button>today</button>
        <button>in Week</button>
      </div>

      <div className="projectsection">
        <div className="projectlable">
          <div>Projects</div>

          <div
            className="addproject"
            onClick={() => {
              setTogglep(true);
            }}
          >
            +
          </div>
        </div>

        {togglep && (
          <Projectform
            settogglep={setTogglep}
            handleProject={handleProject}
            handleProjects={handleProjects}
            project={project}
          />
        )}
        <div className="projectlist">{projectList}</div>
      </div>
    </div>
  );
};

export default Side;
