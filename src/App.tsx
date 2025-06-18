import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CounterPage from './components/Pages/CounterPage';
import ListPage from './components/Pages/ListPage';
import './App.css'

// Main App component for navigation and rendering pages
const App: React.FC = () => {
  return (
    <Router> {/* Wrap the application with Router */}
      <div className="app-container">
        <div className="main-content-card">
          <h1>React Multi-Page Demo (TS)</h1>

          {/* Navigation Bar using Link components */}
          <nav className="nav-bar">
            <Link to="/" className="btn">
              Home
            </Link>
            <Link to="/counter" className="btn">
              Counter
            </Link>
            <Link to="/list" className="btn">
              List
            </Link>
          </nav>

          {/* Define routes for each page */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
