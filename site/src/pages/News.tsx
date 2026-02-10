import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NewsList from '../components/sections/NewsList';
import NewsAwards from '../components/sections/NewsAwards';

const News: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            <Helmet>
                <title>News & Insights - GroundK</title>
                <meta name="description" content="그라운드케이의 최신 소식, 보도자료, 인사이트 및 수상 내역을 확인하세요." />
            </Helmet>
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
