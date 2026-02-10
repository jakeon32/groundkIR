import React, { useEffect } from 'react';
import NewsList from '../components/sections/NewsList';
import NewsAwards from '../components/sections/NewsAwards';

const News: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    News & Insights
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Latest updates from GroundK
                </p>
            </div>

            <NewsList />
            <NewsAwards />
        </div>
    );
};

export default News;
