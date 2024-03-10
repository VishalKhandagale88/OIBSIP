import "bootstrap/dist/css/bootstrap.min.css";
import drAPJ from "../src/assets/drAPJ.png";
import reactIconSVG from "../src/assets/react.svg";
function App() {
  return (
    <>
      <div className="container border-primary bg-dark">
        <div className="cotainer bg-dark">
          <div className="row p-3 overflow-hidden bg-dark text-white">
            <div className="col d-flex justify-content-center">
              <iframe
                width={"100%"}
                height={"600vh"}
                src={"https://www.youtube.com/embed/7E-cwdnsiow"}
                allow="accelerometer;autoplay;clipboard-write;encrypted-media"
                allowFullScreen
                className="rounded-2"
              ></iframe>
            </div>
          </div>
          <div className="row p-3 overflow-hidden text-black my-4 bg-white">
            <div className="row ">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <div>
                  <p
                    style={{
                      fontSize: "50px",
                      fontFamily: "Madimi One",
                      fontWeight: "400",
                    }}
                  >
                    "Your aspirations are your possibilities. Dream big, work
                    hard, stay focused, and surround yourself with good people
                    who believe in you."
                  </p>
                  <p className="text-end text-dark fs-5">
                    -Dr APJ Abdul Kalam
                  </p>
                </div>
              </div>
              <div className="col-3">
                <img width={"500em"} height={"500em"} src={drAPJ} alt="" />
              </div>
            </div>
          </div>
          <div className="row bg-dark">
            <div className="row d-flex align-items-center justify-content-center ">
              <div className="d-flex align-items-center justify-content-center w-50 ">
                <p className="fs-5 text-white">
                  <h1>Biography</h1>
                  Dr. APJ Abdul Kalam, born on October 15, 1931, in Rameswaram,
                  India, rose from humble beginnings to become one of India's
                  most respected scientists and statesmen. He graduated in
                  physics and aerospace engineering and joined the Defense
                  Research and Development Organization (DRDO) and the Indian
                  Space Research Organization (ISRO). Dr. Kalam played a crucial
                  role in India's missile development and nuclear weapon
                  programs, earning him the nickname "Missile Man of India." In
                  2002, he was elected as the 11th President of India, serving
                  until 2007. During his presidency, Dr. Kalam emphasized
                  education, technology, and innovation, particularly targeting
                  the youth. He was known for his humble demeanor, strong work
                  ethic, and commitment to service. After his presidency, Dr.
                  Kalam continued to inspire millions through his speeches,
                  writings, and interactions with students. He believed in the
                  power of education, dreams, and hard work to transform
                  individuals and society. Dr. APJ Abdul Kalam passed away on
                  July 27, 2015, leaving behind a legacy of scientific
                  achievements, visionary leadership, and a deep commitment to
                  the progress of India and the world.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 row text-white p-2">
            <hr />
            <div className="d-flex align-items-start justify-content-center">
              <p className="text-center">made with</p>
              <img className="mx-2" src={reactIconSVG} alt="" />
              <p>By</p>
              <p className="mx-2 text-primary"> Vishal kh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
