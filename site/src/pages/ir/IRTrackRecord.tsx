import React from 'react';
import { Helmet } from 'react-helmet-async';
import TrackRecordProjects from '../../components/sections/TrackRecordProjects';
import TrackRecordSummary from '../../components/sections/TrackRecordSummary';
import TrackRecordList from '../../components/sections/TrackRecordList';

const IRTrackRecord: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Track Record - GroundK IR</title>
                <meta name="description" content="그라운드케이의 정상회의, 글로벌 브랜드, MICE 프로젝트 등 투자자 관점의 레퍼런스를 소개합니다." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR Track Record
                </h1>
                <p className="text-lg text-gray-600 font-mono mb-4">
                    Proven Excellence in Global Mobility
                </p>
                <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed break-keep">
                    국내외 정상회의 및 글로벌 이벤트에서 검증된 운영 레퍼런스를 기반으로, 안정적인 매출과 신규 파이프라인을 확보하고 있습니다.
                </p>
            </div>

            <TrackRecordProjects />
            <TrackRecordSummary />
            <TrackRecordList />
        </div>
    );
};

export default IRTrackRecord;
