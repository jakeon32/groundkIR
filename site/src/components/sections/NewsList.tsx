import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const newsData = [
    {
        id: 1,
        category: 'Press Release',
        title: '서울-스키장 직행...그라운드케이의 셔틀 네트워크',
        date: '2026.02.02',
        source: 'Press'
    },
    {
        id: 2,
        category: 'RIDEUS',
        title: '그라운드케이, 자체 기술로 공공 셔틀의 허들 낮춘다',
        date: '2026.01.16',
        source: 'Press'
    },
    {
        id: 3,
        category: 'Press Release',
        title: '\'썸버지\' 김성복 그라운드케이 CSO',
        date: '2026.01.14',
        source: 'Press'
    },
    {
        id: 4,
        category: 'Press Release',
        title: '그라운드케이, APEC 2025 SOM1의 성공 기여',
        date: '2025.04.02',
        source: 'Press'
    },
    {
        id: 5,
        category: 'Press Release',
        title: '그라운드케이, 짐캐리와 관광산업 활성화 MOU',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 6,
        category: 'Press Release',
        title: '그라운드케이의 독보적인 \'K-모빌리티 서비스\' 큰 반향... 올해 국내외 큰 성과',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 7,
        category: 'Press Release',
        title: '그라운드케이 "한국 MICE의 국제적 위상 높이겠다"',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 8,
        category: 'Press Release',
        title: '그라운드케이, 글로벌 성장 전략 발표',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 9,
        category: 'Press Release',
        title: '그라운드케이 "지역 관광교통의 디지털 전환 선도"',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 10,
        category: 'Press Release',
        title: '"태국에서 성장 모멘텀 찾았다" 그라운드케이, 글로벌 본격 진출',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 11,
        category: 'Press Release',
        title: '그라운드케이, \'검암역 로열파크씨티\' 입주민 셔틀 서비스의 성공적 론칭',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 12,
        category: 'Press Release',
        title: '그라운드케이, 인터컴과 K-MICE 성장을 위한 MOU 체결',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 13,
        category: 'Press Release',
        title: '인터컴-그라운드케이, MOU 체결... K-MICE의 미래 그린다',
        date: '2025.02.20',
        source: 'Press'
    },
    {
        id: 14,
        category: 'Press Release',
        title: '그라운드케이 \'부산형 히든챔피언\'과 \'부산관광 스타기업\' 선정 쾌거',
        date: '2025.02.19',
        source: 'Press'
    },
    {
        id: 15,
        category: 'Press Release',
        title: '그라운드케이, 작년 매출액 206% 상승한 30억원... 당기순이익도 흑자 전환',
        date: '2025.02.19',
        source: 'Press'
    },
    {
        id: 16,
        category: 'Press Release',
        title: '그라운드케이, 부산으로 본사 이전... "글로벌 경쟁력 높인다"',
        date: '2025.02.19',
        source: 'Press'
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
