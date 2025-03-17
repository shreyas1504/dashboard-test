import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <Dashboard />
            </div>
            <footer className="footer">
                <span>© 2025 Powered by Skill Quotient Technologies Sdn Bhd</span>
            </footer>
        </div>
    );
}

export default App;