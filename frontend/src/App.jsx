import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import GetAllCandidates from "./components/Candidates/GetAllCandidates.jsx";
import CreateCandidate from "./Admin/CreateCandidate.jsx";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change_password" element={<ChangePassword />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/candidates" element={<GetAllCandidates />} />
      </Route>
      {/* Admin */}
      <Route path="/candidates/create" element={<CreateCandidate />} />
    </Routes>
  );
}

export default App;
