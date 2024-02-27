import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const[value,setValue] = useState([]);
  const handleOnChange = (event) =>{
    console.log(event);
    const values = [...value]
    values.push(event.target.textContent)
    setValue(values)
    
  }
  const handleClear = () =>{
    setValue([])
  }
  const handleDel = () =>{
    const newItems = [...value]
    newItems.pop()
    setValue(newItems)
  }
  return (
    <>
      <div className="container  vh-100 d-flex align-items-center justify-content-center bg-dark">
        <div
          className="container  bg-light border rounded"
          style={{ maxWidth: "60vh" }}
        >
          <div className="container  p-4">
            <div className="row  border bg-primary-subtle">
              <p>{value}</p>
              <p>Answer Here</p>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange} >
                (
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                )
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                ans
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleDel}>
                del
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleClear}>
                clear
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                7
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                8
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                9
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                %
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                √
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                4
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                5
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                6
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                x
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                ÷
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                1
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                2
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                3
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                +
              </button>
              <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                -
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <div className="col">
                
                <div className="row">
                  <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                    .
                  </button>
                  <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                    0
                  </button>
                  <button className="col btn btn-primary bg-primary-subtle text-center me-1  text-primary" onClick={handleOnChange}>
                    ±
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <button className="col btn btn-primary bg-primary-subtle text-center me-1 text-primary" onClick={handleOnChange}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
