import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const newsData = [
    {
        id: 1,
        category: 'T-RiseUp',
        title: '산업단지 통근버스의 혁신, 부산 산단타요가 선택한 그라운드케이',
        date: '2026.02.05',
        source: '이데일리'
    },
    {
        id: 2,
        category: 'Protocol/Transport',
        title: '그라운드케이, 2026 APEC 정상회의 공식 의전 파트너 선정',
        date: '2026.01.15',
        source: '이데일리'
    },
    {
        id: 3,
        category: 'T-RiseUp',
        title: '운수업 디지털 전환 솔루션 "T-RiseUp", 도입 기업 100곳 돌파',
        date: '2025.12.10',
        source: '전자신문'
    },
    {
        id: 4,
        category: 'Company News',
        title: '[CEO 칼럼] 모빌리티의 미래는 소유가 아닌 경험에 있다',
        date: '2025.11.05',
        source: '블로터'
    },
    {
        id: 5,
        category: 'Press Release',
        title: '그라운드케이, 시리즈 B 투자 유치 성공... 글로벌 확장 본격화',
        date: '2025.10.20',
        source: '벤처스퀘어'
    },
    {
        id: 6,
        category: 'RIDEUS',
        title: '부산국제영화제 공식 셔틀 운영사 선정',
        date: '2025.09.15',
        source: '부산일보'
    }
];

const NewsList: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Protocol/Transport', 'T-RiseUp', 'RIDEUS', 'Company News', 'Press Release'];

    const filteredNews = filter === 'All'
        ? newsData
        : newsData.filter(item => item.category === filter);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-black pb-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-lg font-mono ${filter === cat ? 'font-bold underline' : 'text-gray-500 hover:text-black'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="space-y-8">
                    {filteredNews.map((news, index) => (
                        <div key={news.id} className={`border border-black hover:bg-gray-50 transition-colors group cursor-pointer flex flex-col ${index === 0 && filter === 'All' ? 'md:flex-col' : 'md:flex-row md:items-center justify-between'} p-6`}>
                            {/* Featured Article Styling for the first item when 'All' is selected */}
                            {index === 0 && filter === 'All' ? (
                                <div className="w-full">
                                    <div className="aspect-video w-full bg-gray-200 mb-6 flex items-center justify-center">
                                        <span className="text-gray-400 font-mono">Featured Image</span>
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-mono font-bold bg-black text-white px-3 py-1">
                                            {news.category}
                                        </span>
                                        <span className="text-sm text-gray-500 font-mono">
                                            {news.date}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-4 group-hover:underline">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {/* Placeholder for description if available in data, or just the source */}
                                        {news.source}에서 보도된 내용입니다. 그라운드케이의 성과를 확인하세요.
                                    </p>
                                    <div className="flex justify-end">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-4 md:mb-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-mono font-bold bg-gray-100 px-2 py-1">
                                                {news.category}
                                            </span>
                                            <span className="text-sm text-gray-500 font-mono">
                                                {news.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold font-display group-hover:underline">
                                            {news.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Source: {news.source}
                                        </p>
                                    </div>
                                    <div>
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsList;
