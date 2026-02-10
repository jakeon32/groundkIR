import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BusinessStructure from '../components/sections/BusinessStructure';
import BusinessDetails from '../components/sections/BusinessDetails';
import BusinessRevenue from '../components/sections/BusinessRevenue';

const Business: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        // Handle anchor scrolling
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="w-full bg-white pt-20">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Business Portfolio
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Integrated Mobility Solutions
                </p>
            </div>

            <BusinessStructure />
            <BusinessDetails />
            <BusinessRevenue />

            {/* Market Opportunity / Graph Section Placeholder */}
            <section className="py-20 bg-gray-50 border-t border-black text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">Market Opportunity & Growth</h2>
                    <div className="max-w-4xl mx-auto h-64 border border-black bg-white flex items-center justify-center image-placeholder">
                        <p className="text-gray-500 font-mono">
                            [그래프 영역: 시장 규모(TAM/SAM/SOM) 또는 매출 성장 추이]
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Business;
