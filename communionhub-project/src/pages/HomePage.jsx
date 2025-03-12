import React from 'react';
import './HomePage.css'; // Styles for home page

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section text-white">
        <div className="overlay"></div>
        <div className="container text-center">
          <h1 className="display-4">Connecting People Across Faiths & Interests</h1>
          <p className="lead">Join events and connect with people from different backgrounds through CommunionHub</p>
          <a href="/events" className="btn btn-primary btn-lg">Explore Events</a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
