function SearchBar({ value, onChange, onFilterClick }) {
  return (
    <div className="search-row">
      <input
        className="search-input"
        type="text"
        placeholder="Search: SDE / PM / ML"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="secondary-button" onClick={onFilterClick}>
        Filter
      </button>
    </div>
  );
}

export default SearchBar;