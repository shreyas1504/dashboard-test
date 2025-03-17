import React, { useState } from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company, isSelected, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getBgColor = () => {
        if (isSelected) return '#f0f7ee';
        if (isHovered) return '#f5f5f5';
        return '#ffffff';
    };
    const handleSelect = () => {
        onSelect(company.id);
    };

    return (
        <div
            className="company-card"
            style={{ backgroundColor: getBgColor() }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="company-icon" style={{ backgroundColor: company.color }}>

            </div>
            <div className="company-details">
                <div className="company-name">{company.name}</div>
                <div className="company-info">
                    <div className="company-info-item">
                        <span className="company-info-label">Company Code :</span>
                        <span className="company-info-value">{company.code}</span>
                    </div>
                    <div className="company-info-item">
                        <span className="company-info-label">TIN Number :</span>
                        <span className="company-info-value">{company.tin}</span>
                    </div>
                    <div className="company-info-item">
                        <span className="company-info-label">Users Count :</span>
                        <span className="company-info-value">{company.users}</span>
                    </div>
                    <div className="company-info-item">
                        <span className="company-info-label">Location :</span>
                        <span className="company-info-value">{company.location}</span>
                    </div>
                </div>
            </div>
            <div className="company-select">
                <input
                    type="checkbox"
                    className="company-checkbox"
                    checked={isSelected}
                    onChange={handleSelect}
                />
            </div>
        </div>
    );
};

export default CompanyCard;