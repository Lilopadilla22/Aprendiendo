
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  return (
    <div className="bg-background min-h-screen text-textDark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulo/:id" element={<ModuleDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;