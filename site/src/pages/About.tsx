import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutStory from '../components/sections/AboutStory';
import AboutHistory from '../components/sections/AboutHistory';
import AboutTeamInfo from '../components/sections/AboutTeamInfo';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            <Helmet>
                <title>About Us - GroundK</title>
                <meta name="description" content="그라운드케이는 운수산업의 디지털 전환을 이끄는 기술 기업입니다. 우리의 창업 스토리, 연혁, 팀 정보를 확인하세요." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    About GroundK
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    We are transforming the mobility industry
                </p>
            </div>

            <AboutStory />
            <AboutHistory />
            <AboutTeamInfo />
        </div>
    );
};

export default About;
