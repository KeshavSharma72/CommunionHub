import React, { useState } from 'react';

function AddEventForm({ addEvent }) {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    category: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(newEvent);
    setNewEvent({ title: '', date: '', category: '', location: '' }); // Reset form after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          name="category"
          value={newEvent.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Location</label>
        <input
          type="text"
          className="form-control"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
}

export default AddEventForm;
