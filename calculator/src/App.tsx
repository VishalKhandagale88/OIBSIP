import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import f from "../src/assets/react.svg"

function App() {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("0");
  const handleOnClick = (val: string) => {
    setValue((prevValue) => prevValue + val);
  };

  const handleClear = () => {
    setValue("");
    setAnswer("")
  };

  const handleDel = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(value);
      setAnswer(result.toString());
    } catch (error) {
      setAnswer("Error");
    }
  };

  return (
    <>
      <div
        className="container  vh-100 d-flex align-items-center justify-content-center bg-dark"    
      >
        <div
          className="container  bg-light border rounded"
          style={{ maxWidth: "60vh" }}
        >
          <div className="container  p-4">
            <div className="row  border bg-primary-subtle">
              <div className="row">
                <p className="fs-3">{value}</p>
              </div>
              <div className="row d-flex align-items-end justify-content-end">
                <p className="text-end fs-1 text-success-subtle">{answer}</p>
              </div>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("(")}
              >
                (
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick(")")}
              >
                )
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={calculateResult}
              >
                ans
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={handleDel}
              >
                del
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={handleClear}
              >
                clear
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("7")}
              >
                7
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("8")}
              >
                8
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("9")}
              >
                9
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("%")}
              >
                %
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("√")}
              >
                √
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("4")}
              >
                4
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("5")}
              >
                5
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("6")}
              >
                6
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("*")}
              >
                x
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("/")}
              >
                ÷
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("1")}
              >
                1
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("2")}
              >
                2
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                onClick={() => handleOnClick("3")}
              >
                3
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("+")}
              >
                +
              </button>
              <button
                className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                onClick={() => handleOnClick("-")}
              >
                -
              </button>
            </div>
            <div className="row d-flex justify-conent-center align-items-center mt-1 ">
              <div className="col">
                <div className="row">
                  <button
                    className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                    onClick={() => handleOnClick(".")}
                  >
                    .
                  </button>
                  <button
                    className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                    onClick={() => handleOnClick("0")}
                  >
                    0
                  </button>
                  <button
                    className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1  text-primary"
                    onClick={() => handleOnClick("±")}
                  >
                    ±
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <button
                    className="col fs-3 btn btn-primary bg-primary-subtle text-center me-1 text-primary"
                    onClick={calculateResult}
                  >
                    =
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
