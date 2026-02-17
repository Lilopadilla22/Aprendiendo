
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
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