import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import EventListingPage from "./pages/EventListingPage";
import "./app.css"

function App() {
  return (
    <Router>
      <div>
        <Header />  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
