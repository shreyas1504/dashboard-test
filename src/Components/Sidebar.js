import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [expandedMenus, setExpandedMenus] = useState({
        adminPanel: true,
        settings: false
    });

    const toggleMenu = (menu) => {
        setExpandedMenus({
            ...expandedMenus,
            [menu]: !expandedMenus[menu]
        });
    };

    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <i className="fas fa-file-invoice"></i>
                <span>E-Invoices</span>
            </div>
            <div className="sidebar-item">
                <i className="fas fa-plus"></i>
                <span>Add e-Invoice</span>
            </div>
            <div className="sidebar-item">
                <i className="fas fa-th-large"></i>
                <span>Dashboard</span>
            </div>
            <div className="sidebar-item">
                <i className="fas fa-percent"></i>
                <span>Taxation</span>
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-menu-header" onClick={() => toggleMenu('adminPanel')}>
                    <i className="fas fa-cog"></i>
                    <span>Admin Panel</span>
                    <i className={`fas fa-chevron-${expandedMenus.adminPanel ? 'down' : 'right'}`}></i>
                </div>
                {expandedMenus.adminPanel && (
                    <div className="sidebar-submenu">
                        <div className="sidebar-submenu-item">Users</div>
                        <div className="sidebar-submenu-item">Entities</div>
                    </div>
                )}
            </div>

            <div className="sidebar-item">
                <i className="fas fa-info-circle"></i>
                <span>Information Center</span>
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-menu-header" onClick={() => toggleMenu('settings')}>
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                    <i className={`fas fa-chevron-${expandedMenus.settings ? 'down' : 'right'}`}></i>
                </div>
                {expandedMenus.settings && (
                    <div className="sidebar-submenu">
                        <div className="sidebar-submenu-item">Application</div>
                        <div className="sidebar-submenu-item">Mapping</div>
                        <div className="sidebar-submenu-item">SFTP</div>
                        <div className="sidebar-submenu-item">Users</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;