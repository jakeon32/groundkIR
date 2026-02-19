import React from 'react';
import { Helmet } from 'react-helmet-async';
import NewsList from '../../components/sections/NewsList';

const IRNews: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>IR News - GroundK IR</title>
                <meta name="description" content="그라운드케이의 공시, 공지, 언론보도, 보도자료를 확인하세요." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR News
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Announcements, Press Coverage &amp; Releases
                </p>
            </div>

            <NewsList />
        </div>
    );
};

export default IRNews;
