import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import GetAllCandidates from "./components/Candidates/GetAllCandidates.jsx";
import CreateCandidate from "./Admin/CreateCandidate.jsx";
import EditCandidate from "./Admin/EditCandidate.jsx";
import DeleteCandidate from "./Admin/useDeleteCandidate.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  const { userProfile } = useContext(AuthContext);
  console.log(userProfile);
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
      {userProfile.role == "admin" && (
        <>
          <Route path="/candidates/create" element={<CreateCandidate />} />
          <Route
            path="/candidates/update/:candidateId"
            element={<EditCandidate />}
          />
          <Route
            path="/candidates/delete/:candidateId"
            element={<DeleteCandidate />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;
