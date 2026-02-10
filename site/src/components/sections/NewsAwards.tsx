import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';

const awardsData = [
    {
        year: '2025',
        items: [
            '관광벤처의날 우수기업 (한국관광공사장 표창)',
            '부산 서비스 강소기업 선정'
        ]
    },
    {
        year: '2024',
        items: [
            'MICE 우수기업 (부산시장 표창)',
            'MICE 대상 디지털전환 부문',
            '관광플러스테크 기업 (한국관광공사)',
            '부산광역시 전략산업 선도기업'
        ]
    },
    {
        year: '2023',
        items: [
            '부산형 히든챔피언 선정',
            'Core 100 (서울투자청)',
            '글로벌 강소기업 1,000+ (중소벤처기업부)',
            '특허 등록 2건 / 저작권 등록 1건'
        ]
    },
    {
        year: '2022',
        items: [
            'Main-Biz 확인 (경영혁신형 중소기업)',
            '기술평가 T-4 등급 획득',
            '성장관광벤처기업 선정',
            '청년친화 강소기업'
        ]
    },
    {
        year: '2021',
        items: [
            '벤처기업 인증',
            'MICE 디지털전환 최우수상',
            '관광글로벌 선도기업'
        ]
    },
    {
        year: '2020',
        items: [
            'SW 고성장클럽 200 선정',
            '고용노동부 강소기업'
        ]
    }
];

const NewsAwards: React.FC = () => {
    // Open the most recent year by default
    const [openYears, setOpenYears] = useState<string[]>(['2025', '2024']);

    const toggleYear = (year: string) => {
        setOpenYears(prev =>
            prev.includes(year)
                ? prev.filter(y => y !== year)
                : [...prev, year]
        );
    };

    return (
        <section className="py-20 bg-gray-50 border-t border-black">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-display text-black mb-4">Awards & Certifications</h2>
                    <p className="text-lg text-gray-600">
                        기술력과 성장성을 인정받은 그라운드케이의 발자취
                    </p>
                </div>

                <div className="space-y-4">
                    {awardsData.map((group) => (
                        <div key={group.year} className="border border-black bg-white">
                            <button
                                onClick={() => toggleYear(group.year)}
                                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold font-display text-black">{group.year}</span>
                                    <span className="text-sm text-gray-500 font-mono hidden md:inline">
                                        {group.items.length} Awards
                                    </span>
                                </div>
                                {openYears.includes(group.year) ? <ChevronUp /> : <ChevronDown />}
                            </button>

                            {openYears.includes(group.year) && (
                                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                                    <ul className="space-y-3 mt-4">
                                        {group.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Award size={18} className="text-black mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsAwards;
