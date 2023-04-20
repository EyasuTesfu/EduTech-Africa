import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProjectDetail from "./pages/ProjectDetail";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NewPage from "./pages/NewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />

          <Route path="project" element={<ProjectDetail />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="new" element={<NewPage />} />
          <Route path="project" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
