import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutStory from '../../components/sections/AboutStory';
import AboutHistory from '../../components/sections/AboutHistory';
import AboutTeamInfo from '../../components/sections/AboutTeamInfo';
import NewsAwards from '../../components/sections/NewsAwards';

const Company: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Company - GroundK</title>
                <meta name="description" content="그라운드케이의 비전, 미션, 연혁, 핵심 멤버, 수상 및 인증 내역을 소개합니다." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Company
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Vision, History &amp; Team
                </p>
            </div>

            <AboutStory />
            <AboutHistory />
            <AboutTeamInfo />

            {/* Awards & Certifications */}
            <div className="border-t border-black">
                <div className="max-w-7xl mx-auto px-6 pt-12">
                    <h2 className="text-3xl font-bold font-display text-black mb-2 text-center">
                        Awards &amp; Certifications
                    </h2>
                    <p className="text-gray-600 font-mono text-center mb-8">
                        정부 과제 선정 및 수상 내역
                    </p>
                </div>
                <NewsAwards />
            </div>
        </div>
    );
};

export default Company;
