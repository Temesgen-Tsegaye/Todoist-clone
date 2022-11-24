import { FaTrash } from "react-icons/fa";
import Projectform from "../Forms/Projectform";
import { useState } from "react";
const Side = ({ handleProject, handleProjects, project, projects ,setProjects}) => {
  const [togglep, setTogglep] = useState(false);

  const filterProject=(e)=>{
      const id=e.currentTarget.parentElement.id
     
       const filterd=projects.filter((pro)=>{
           return pro.id!==id

       })
    setProjects(filterd)
  }

  const projectList = projects.map((project) => {
    return (
      <div key={project.id} id={project.id} className="project">
        {project.project} <FaTrash onClick={(e)=>{filterProject(e)}} />
      </div>
    );
  });
  return (
    <div className="side">
      <div className="static-button-container">
        <button>index</button>
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
