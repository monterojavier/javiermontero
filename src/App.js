import "./App.css";
import { Navbar, Home, Resume, Projects } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
