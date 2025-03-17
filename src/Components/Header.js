import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="page-title">Landing Page-Company-1 Selection</div>
            <header className="header">
                <div className="header-left">
                    <div className="logo">SMARTe15</div>
                    <div className="organization-dropdown">
                        <span>Organization 1</span>
                        <div className="status-indicator active"></div>
                        <div className="company-dropdown">
                            <span>Company 1</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="notification-icon">
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="admin-dropdown">
                        <div className="admin-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <span>ADMIN 1</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;