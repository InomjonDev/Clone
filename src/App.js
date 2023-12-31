import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./router/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
