import React, { useState } from 'react';


const projectList = [
    { year: '2025', title: 'APEC 2025 KOREA 정상회의 수송', category: 'Summit' },
    { year: '2025', title: '2025 SBS 가요대전 Summer 외국인 셔틀', category: 'Entertainment' },
    { year: '2025', title: '산단타요 통근버스 TMS 도입', category: 'Corporate' },
    { year: '2023', title: 'ADB 연차총회 68개국 의전', category: 'Summit' },
    { year: '2023', title: 'Louis Vuitton Pre-Fall Seoul', category: 'Luxury' },
    { year: '2022', title: 'Dior Fall 2022 Seoul', category: 'Luxury' },
    { year: '2019', title: '한-아세안 특별 정상회의', category: 'Summit' },
    { year: '2019', title: 'CHANEL Metiers d\'Art', category: 'Luxury' },
    { year: '2018', title: '정보통신부 장관회의 11개국 의전', category: 'Summit' },
];

const categories = ['All', 'Summit', 'Luxury', 'Entertainment', 'Corporate'];

const TrackRecordList: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectList
        : projectList.filter(p => p.category === filter);

    return (
        <section className="py-20 border-t border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold font-display text-black mb-4">Project Archive</h2>
                    <p className="text-lg text-gray-600">
                        130+ Projects Since 2016
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 border border-black font-mono text-sm transition-colors ${filter === cat
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                                }`}
                        >
                            {cat === 'Summit' ? 'Summit/Intl Event' : cat}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="border-t border-black">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="border-b border-black py-6 flex flex-col md:flex-row md:items-center justify-between group hover:bg-gray-50 transition-colors px-4">
                            <div className="flex items-center gap-6">
                                <span className="font-mono text-gray-500 w-16">{project.year}</span>
                                <h3 className="text-xl font-bold font-display group-hover:underline">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="mt-2 md:mt-0 flex items-center gap-4">
                                <span className="text-xs font-mono font-bold bg-gray-200 px-2 py-1">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 font-mono text-sm">
                        * 더 많은 프로젝트 레퍼런스는 제휴 문의를 통해 확인하실 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrackRecordList;
