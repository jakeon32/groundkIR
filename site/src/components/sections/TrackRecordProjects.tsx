import React from 'react';

const projects = [
    {
        title: 'APEC 2025 KOREA 정상회의',
        desc: '금호고속 공동수주, VMS 시스템 도입으로 완벽한 의전 수송 수행',
        tags: ['Summit', 'Global'],
        year: '2025'
    },
    {
        title: 'ADB 연차총회',
        desc: '68개국 재무장관 및 중앙은행 총재 의전, 2023 인천',
        tags: ['Intl Event', 'Protocol'],
        year: '2023'
    },
    {
        title: '한-아세안 특별 정상회의',
        desc: '차량 150대 의전/수송/물류 총괄, 2019 부산',
        tags: ['Summit', 'Logistics'],
        year: '2019'
    },
    {
        title: 'Louis Vuitton Pre-Fall',
        desc: '글로벌 럭셔리 브랜드 패션쇼 VIP 게스트 수송, 서울',
        tags: ['Luxury', 'VIP'],
        year: '2023'
    },
    {
        title: 'Dior Fall 2022',
        desc: '글로벌 게스트 의전 및 수송, 서울',
        tags: ['Luxury', 'Fashion'],
        year: '2022'
    },
    {
        title: '2025 SBS 가요대전 Summer',
        desc: '대규모 외국인 관람객 셔틀 운영',
        tags: ['Entertainment', 'Shuttle'],
        year: '2025'
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
