import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import { getUserById } from "../services/mockApi";

function UserProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const data = await getUserById(userId);
      setUser(data);
    }
    loadUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="page page--user-profile">
      <TopBar />

      <section className="detail-top-row">
        <button type="button" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <h1>User Profile</h1>
      </section>

      <section className="profile-card">
        <div className="profile-header">
          <img src={user.imageUrl} alt={user.name} />
          <div>
            <h2>Name: {user.name}</h2>
          </div>
        </div>

        <div className="info-block">
          <h3>Introduction</h3>
          <p>{user.introduction}</p>
        </div>

        <div className="info-block">
          <h3>Goal</h3>
          <p>{user.goal}</p>
        </div>

        <div className="info-block">
          <h3>Availability</h3>
          <p>{user.availability}</p>
        </div>

        <div className="info-block">
          <h3>Skills</h3>
          <p>{user.skills.join(", ")}</p>
        </div>
      </section>

      <BottomNav active="explore" />
    </main>
  );
}

export default UserProfilePage;