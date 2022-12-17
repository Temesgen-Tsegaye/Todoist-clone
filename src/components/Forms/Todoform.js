import { useEffect } from "react";

const Todoform = ({ projects, todo, setTodo, setToggle, handleTodos, id }) => {
  const options = projects.map((items) => {
    return (
      <option
       key={items.id}
        value={items.project}
     
      >
        {items.project}
      </option>
    );
  });

  const handletodo = (e) => {
    console.log(e);
    setTodo((prive) => {
      return { ...prive, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="Todo_form">
      <div>
        <input
          onChange={(e) => {
            handletodo(e);
          }}
          value={todo.title}
          name="title"
          type="text"
          placeholder="Title"
        />
        <div>
          <label htmlFor="selperi">Periority</label>
          <select
            onChange={(e) => {
              handletodo(e);
            }}
            value={todo.periority}
            name="periority"
            id="selperi"
          >
            
            <option value="High">High</option>
            <option value="Middle">Middle</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="selproj">Project</label>
          <select
            onChange={(e) => {
              handletodo(e);
            }}
            value={todo.project}
            name="project"
            id="selproj"
          >
            <option value="">index</option>
            {options}
          </select>
        </div>
        <div>
          <label htmlFor="date">Deadline</label>
          <input
            onChange={(e) => {
              handletodo(e);
            }}
            value={todo.deadline}
            name="deadline"
            type="date"
            id="date"
          />
        </div>
      </div>
      <textarea
        onChange={(e) => {
          handletodo(e);
        }}
        value={todo.description}
        name="description"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className="last_todo_row">
        <button
          onClick={() => {
            setToggle(false);

            handleTodos(id);
            console.log("toto");
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setToggle(false);
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Todoform;
