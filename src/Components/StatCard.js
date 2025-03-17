import React from 'react';
import './StatCard.css';

const StatCard = ({ title, icon, value, color }) => {
    const cardStyle = {
        backgroundColor: color,
    };

    return (
        <div className="stat-card" style={{ backgroundColor: color + '20' }}>
            <div className="stat-card-content">
                <div className="stat-card-title">{title}</div>
                <div className="stat-card-value">{value}</div>
            </div>
            <div className="stat-card-icon" style={{ color: color }}>
                <i className={`fas fa-${icon}`}></i>
            </div>
        </div>
    );
};

export default StatCard;