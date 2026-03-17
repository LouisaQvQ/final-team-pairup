import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import { getProjectById } from "../services/mockApi";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [invited, setInvited] = useState(false);

  useEffect(() => {
    async function loadProject() {
      const data = await getProjectById(projectId);
      setProject(data);
    }
    loadProject();
  }, [projectId]);

  const handleInvite = () => {
    setInvited(true);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="page page--project-detail">
      <TopBar />

      <section className="detail-top-row">
        <button type="button" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <button type="button" onClick={handleInvite} disabled={invited}>
          {invited ? "Invited" : "Invite"}
        </button>
      </section>

      <section className="project-detail-content">
        <h1>Project Details</h1>

        <div className="project-hero">
          <img src={project.imageUrl} alt={project.projectName} />
          <div>
            <h2>{project.projectName}</h2>

            <button
              type="button"
              className="link-button"
              onClick={() => navigate(`/users/${project.owner.id}`)}
            >
              {project.owner.name}
            </button>
          </div>
        </div>

        <div className="info-block">
          <h3>Description</h3>
          <p>{project.description}</p>
        </div>

        <div className="info-block">
          <h3>Goal</h3>
          <p>{project.goal}</p>
        </div>

        <div className="info-block">
          <h3>Required Skills</h3>
          <p>{project.requiredSkills.join(", ")}</p>
        </div>

        <div className="info-block">
          <h3>Schedule</h3>
          <p>{project.schedule}</p>
        </div>
      </section>

      <BottomNav active="explore" />
    </main>
  );
}

export default ProjectDetailPage;