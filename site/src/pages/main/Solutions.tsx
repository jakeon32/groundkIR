import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import BusinessStructure from '../../components/sections/BusinessStructure';
import BusinessDetails from '../../components/sections/BusinessDetails';
import BusinessRevenue from '../../components/sections/BusinessRevenue';

const Solutions: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Solutions - GroundK</title>
                <meta name="description" content="메가 이벤트 셔틀, 비즈니스 모빌리티 플랫폼(T-RiseUp), PMS 솔루션 등 그라운드케이의 서비스를 소개합니다." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Solutions &amp; Services
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Integrated Mobility Solutions for Every Scale
                </p>
            </div>

            <BusinessStructure />
            <BusinessDetails />
            <BusinessRevenue />

            {/* Market Opportunity Placeholder */}
            <section className="py-20 bg-gray-50 border-t border-black text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">Market Opportunity &amp; Growth</h2>
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

export default Solutions;
