import React from 'react';

function FilterEvents({ filterCategory, setFilterCategory }) {
  return (
    <div className="mb-4">
      <label className="form-label">Filter by Category</label>
      <select
        className="form-select"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)} // Update filter category
      >
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
    </div>
  );
}

export default FilterEvents;
