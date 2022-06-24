import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import ProtectedRoute from "./components/ProtectedRoute";
import Layouts from "./components/Layouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="list" element={<List />} />
          </Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
