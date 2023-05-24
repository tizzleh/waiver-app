// components/Layout.tsx

import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 antialiased py-8 px-4 sm:px-6 lg:px-8">
            <main>{children}</main>
        </div>
    );
};

export default Layout;

