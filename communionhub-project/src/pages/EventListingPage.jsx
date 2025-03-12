import React, { useState } from 'react';
import AddEventForm from '../components/AddEventForm';
import FilterEvents from '../components/FilterEvents';
import './EventListingPage.css';


function EventListingPage() {
  const [events, setEvents] = useState([
    { title: "Charity Event", date: "2025-03-15", category: "Charity", location: "New York" },
    { title: "Religious Gathering", date: "2025-04-05", category: "Religious", location: "Los Angeles" },
    { title: "Social Meet", date: "2025-05-10", category: "Social", location: "Chicago" }
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false); // Track if the form is visible
  const [filterCategory, setFilterCategory] = useState('All'); // State for filtering

  // Function to add event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Filtered events
  const filteredEvents = filterCategory === 'All' ? events : events.filter(event => event.category === filterCategory);

  return (
    <>
      <div className="container event-listing-page">
        <div className="section-header">
          <h2>Event Listing</h2>
        </div>

        {/* Button to toggle the Add Event Form */}
        <div className="d-flex justify-content-end mb-4">
          <button
            className="btn btn-primary btn-add-event"
            onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
          >
            {isFormVisible ? 'Close Form' : 'Add New Event'}
          </button>
        </div>

        {/* Show the form if the button is clicked */}
        {isFormVisible && (
          <div className="mb-4">
            <AddEventForm addEvent={addEvent} />
          </div>
        )}

        {/* Use FilterEvents component */}
        <div className="filter-section">
          <FilterEvents
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory} // Pass down the state
          />
        </div>

        

        {/* Display Events */}
        {filteredEvents.length === 0 ? (
          <div className="alert alert-warning text-center">No events found for this category</div>
        ) : (
          <div className="row event-list">
            {filteredEvents.map((event, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card event-card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text"><strong>Date:</strong> {event.date}</p>
                    <p className="card-text"><strong>Location:</strong> {event.location}</p>
                    <p className="card-text"><strong>Category:</strong> {event.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EventListingPage;
