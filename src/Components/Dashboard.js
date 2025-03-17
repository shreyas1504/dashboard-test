import React, { useState } from 'react';
import './Dashboard.css';
import StatCard from './StatCard';
import CompanyCard from './CompanyCard';

const Dashboard = () => {
    const [selectedCompany, setSelectedCompany] = useState(1);

    const handleCompanySelect = (companyId) => {
        setSelectedCompany(companyId);
    };

    const companies = [
        {
            id: 1,
            name: 'Company 1',
            color: '#e53935',
            code: '',
            tin: '',
            users: '',
            location: 'City,Country'
        },
        {
            id: 2,
            name: 'Company 2',
            color: '#1e88e5',
            code: '',
            tin: '',
            users: '',
            location: 'City,Country'
        },
        {
            id: 3,
            name: 'Company 3',
            color: '#00897b',
            code: '',
            tin: '',
            users: '',
            location: 'City,Country'
        },
        {
            id: 4,
            name: 'Company 4',
            color: '#3949ab',
            code: '',
            tin: '',
            users: '',
            location: 'City,Country'
        }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard-title">Organization 1</div>

            <div className="stat-cards-container">
                <StatCard
                    title="Total Companies"
                    icon="building"
                    value="4"
                    color="6FC3E8"
                />
                <StatCard
                    title="Total Users"
                    icon="users"
                    value="9,990"
                    color="#cfb8e3"
                />
                <StatCard
                    title="Total Invoices"
                    icon="file-invoice"
                    value="999,999"
                    color="#6FC3E8"
                />
            </div>

            <div className="company-cards-container">
                {companies.map(company => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        isSelected={selectedCompany === company.id}
                        onSelect={handleCompanySelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;