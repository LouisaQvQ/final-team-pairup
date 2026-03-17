import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/users/:userId" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;