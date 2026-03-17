function FilterModal({ isOpen, filters, onChange, onClose }) {
  if (!isOpen) return null;

  function updateField(field, value) {
    onChange({
      ...filters,
      [field]: value,
    });
  }

  function resetFilters() {
    onChange({
      career: "",
      goal: "",
      skills: "",
      availability: "",
    });
  }

  return (
    <div className="filter-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Filter</h2>

        <label>
          Career
          <input
            value={filters.career}
            onChange={(e) => updateField("career", e.target.value)}
          />
        </label>

        <label>
          Goal
          <input
            value={filters.goal}
            onChange={(e) => updateField("goal", e.target.value)}
          />
        </label>

        <label>
          Skills
          <input
            value={filters.skills}
            onChange={(e) => updateField("skills", e.target.value)}
          />
        </label>

        <label>
          Availability
          <input
            value={filters.availability}
            onChange={(e) => updateField("availability", e.target.value)}
          />
        </label>

        <div className="filter-actions">
          <button type="button" onClick={resetFilters}>
            Reset
          </button>
          <button type="button" onClick={onClose}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;