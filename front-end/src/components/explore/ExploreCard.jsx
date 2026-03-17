function ExploreCard({ project, onClick }) {
  return (
    <article className="explore-card" onClick={onClick}>
      <img
        className="explore-card__image"
        src={project.imageUrl}
        alt={project.projectName}
      />

      <div className="explore-card__content">
        <h3>{project.projectName}</h3>
        <p><strong>Career:</strong> {project.career}</p>
        <p><strong>Goal:</strong> {project.goal}</p>
        <p><strong>Schedule:</strong> {project.schedule}</p>
        <p><strong>Skills:</strong> {project.requiredSkills.join(", ")}</p>
      </div>
    </article>
  );
}

export default ExploreCard;