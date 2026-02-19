import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewsList from '../../components/sections/NewsList';

const Resources: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Resources & PR - GroundK</title>
                <meta name="description" content="그라운드케이의 최신 보도자료, 뉴스, 운영 인사이트를 확인하세요." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Resources &amp; PR
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    News, Press Releases &amp; Insights
                </p>
            </div>

            <NewsList />
        </div>
    );
};

export default Resources;
