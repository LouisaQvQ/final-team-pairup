import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import SearchBar from "../components/explore/SearchBar";
import FilterModal from "../components/explore/FilterModal";
import ExploreCard from "../components/explore/ExploreCard";
import { getProjects } from "../services/mockApi";

function ExplorePage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    career: "",
    goal: "",
    skills: "",
    availability: "",
  });

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.goal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.requiredSkills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCareer =
        !filters.career || project.career === filters.career;

      const matchesGoal =
        !filters.goal ||
        project.goal.toLowerCase().includes(filters.goal.toLowerCase());

      const matchesSkills =
        !filters.skills ||
        project.requiredSkills.some((skill) =>
          skill.toLowerCase().includes(filters.skills.toLowerCase())
        );

      const matchesAvailability =
        !filters.availability || project.schedule === filters.availability;

      return (
        matchesSearch &&
        matchesCareer &&
        matchesGoal &&
        matchesSkills &&
        matchesAvailability
      );
    });
  }, [projects, searchTerm, filters]);

  return (
    <main className="page page--explore">
      <TopBar />
      <section className="page-header">
        <h1>Explore</h1>
      </section>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onFilterClick={() => setIsFilterOpen(true)}
      />

      <section className="explore-list">
        {filteredProjects.map((project) => (
          <ExploreCard
            key={project.id}
            project={project}
            onClick={() => navigate(`/projects/${project.id}`)}
          />
        ))}
      </section>

      <FilterModal
        isOpen={isFilterOpen}
        filters={filters}
        onChange={setFilters}
        onClose={() => setIsFilterOpen(false)}
      />

      <BottomNav active="explore" />
    </main>
  );
}

export default ExplorePage;