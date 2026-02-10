import React from 'react';

const projects = [
    {
        title: 'G20 정상회의 공식 의전',
        desc: '주요 20개국 정상 및 수행원 대상 의전 차량 운영 총괄',
        tags: ['Global Event', 'VVIP Protocol'],
        year: '202X'
    },
    {
        title: 'APEC CEO Summit 수송',
        desc: '아시아태평양 경제협력체 CEO 서밋 참가자 수송 솔루션 제공',
        tags: ['MICE', 'Mass Transit'],
        year: '2025'
    },
    {
        title: '주요 대기업 통근 셔틀',
        desc: 'S그룹, H그룹 등 국내 주요 대기업 임직원 출퇴근 셔틀 운영',
        tags: ['Corporate', 'Shuttle'],
        year: 'Ongoing'
    },
    {
        title: 'K-Culture 페스티벌',
        desc: '대규모 관람객 이동 편의를 위한 셔틀버스 및 주차 관제 시스템',
        tags: ['Festival', 'Platform'],
        year: '2024'
    },
    {
        title: 'ADB 연차총회 의전',
        desc: '68개국 재무장관 및 중앙은행 총재 대상 VIP 의전 수송',
        tags: ['Intl Event', 'VVIP'],
        year: '2023'
    },
    {
        title: 'Louis Vuitton Pre-Fall',
        desc: '글로벌 럭셔리 브랜드 패션쇼 VIP 게스트 수송 총괄',
        tags: ['Luxury', 'Private'],
        year: '2023'
    }
];

const TrackRecordProjects: React.FC = () => {
    return (
        <section className="py-20 border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold font-display text-black mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600">
                        국가적 행사부터 기업의 일상적 이동까지,<br />
                        그라운드케이는 가장 신뢰받는 모빌리티 파트너입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-black group hover:bg-gray-50 transition-colors">
                            {/* Image Placeholder */}
                            <div className="aspect-video w-full bg-gray-100 border-b border-black relative image-placeholder">
                                <div className="text-center p-4 absolute inset-0 flex flex-col justify-center items-center">
                                    <p className="font-bold text-lg mb-2">{project.title} 현장</p>
                                    <p className="text-xs text-gray-500">
                                        [현장 사진: {project.tags[0]} 관련 차량 도열 또는 운행 장면]
                                    </p>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="text-xs font-mono font-bold bg-black text-white px-2 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="font-mono text-sm text-gray-500">{project.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-black mb-2">{project.title}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrackRecordProjects;
