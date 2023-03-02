import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
 
  const [mode, setMode] = useState("light");
  const toggleGreenMode = () => {
    if (mode === "light" || mode === "dark") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("green mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("green mode has been disabled", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light"|| mode === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to anlyze below"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
