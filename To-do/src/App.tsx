import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      setTodos([...todos, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container-fluid vh-100 bg-primary-subtle">
        <div className="my-3 row bg-light-subtle text-dark">
          <h3>To-Do List Web App </h3>
        </div>
        <div className="row ">
          <div className="col bg-primary-subtle ">
            <div className="rounded-2 input-container p-4 bg-white d-flex align-items-center justify-content-center ">
              <form
                action=""
                className="rounded-3 border-dark d-flex flex-column"
              >
                <div className="my-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    required
                    className="bg-light-subtle border-1"
                    onChange={handleTitleChange}
                    style={{ width: "500px" ,height:"50px"}}
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  style={{ width: "500px" ,height:"400px"}}

                ></textarea>
                <button className="btn btn-success mt-3" onClick={handleSubmit}>
                  Save
                </button>
              </form>
            </div>
          </div>

          <div className="col bg-light p-4">
            <div className="row bg-primary-subtle  rounded-2">
              {todos.map((todo, index) => (
                <div className="todo" key={index}>
                  <div className="d-flex align-items-baseline justify-content-around">
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button className="btn border border-1 border-dark" onClick={() => handleDelete(index)}>❌</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
