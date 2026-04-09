import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulo/:id" element={<ModuleDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
