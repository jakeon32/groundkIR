import React, { useEffect } from 'react';
import AboutStory from '../components/sections/AboutStory';
import AboutHistory from '../components/sections/AboutHistory';
import AboutTeamInfo from '../components/sections/AboutTeamInfo';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    About GroundK
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Problem Solvers in Mobility Industry
                </p>
            </div>

            <AboutStory />
            <AboutHistory />
            <AboutTeamInfo />
        </div>
    );
};

export default About;
