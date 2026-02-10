import React, { useEffect } from 'react';
import TrackRecordProjects from '../components/sections/TrackRecordProjects';
import TrackRecordSummary from '../components/sections/TrackRecordSummary';

const TrackRecord: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Track Record
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Proven Reliability & Scale
                </p>
            </div>

            <TrackRecordProjects />
            <TrackRecordSummary />
        </div>
    );
};

export default TrackRecord;
