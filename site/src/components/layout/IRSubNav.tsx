import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const irNavItems = [
    { name: 'Overview', path: '/ir' },
    { name: 'Investment Highlights', path: '/ir/investment-highlights' },
    { name: 'Financials', path: '/ir/financials' },
    { name: 'Track Record', path: '/ir/track-record' },
    { name: 'News', path: '/ir/news' },
    { name: 'Library', path: '/ir/library' },
    { name: 'Calendar', path: '/ir/calendar' },
];

const IRSubNav: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className="fixed top-16 w-full z-40 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-12 overflow-x-auto scrollbar-hide space-x-6">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider shrink-0">IR</span>
                    <div className="w-px h-5 bg-gray-300 shrink-0"></div>
                    {irNavItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm font-medium shrink-0 transition-colors ${
                                    isActive
                                        ? 'text-black font-bold underline underline-offset-4'
                                        : 'text-gray-500 hover:text-black'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IRSubNav;
