import React from 'react';

const metrics = [
    { label: '정상회의 수행', value: '4회' },
    { label: '수행 국가', value: '50+개국' },
    { label: '글로벌 클라이언트', value: '160+개' },
    { label: '누적 프로젝트', value: '130+건' },
    { label: '럭셔리 브랜드 행사', value: '10+건' },
    { label: '2023 매출', value: '51억원' },
    { label: '무사고 운영', value: '9년' }
];

const partnerCategories = [
    {
        category: 'Government & Public',
        items: ['APEC', 'ADB', 'Foreign Ministry', 'MCST', 'Busan City', 'BOK', 'Seoul Tourism']
    },
    {
        category: 'Luxury & Fashion',
        items: ['Louis Vuitton', 'Dior', 'CHANEL', 'BURBERRY', 'Moncler']
    },
    {
        category: 'Entertainment',
        items: ['SM C&C', 'NCT', 'GQ', 'AFC']
    },
    {
        category: 'Corporate & Tourism',
        items: ['Hyundai Motor', 'Everland', 'Lotte Card', 'Knoll Universe', 'Visa']
    }
];

const TrackRecordSummary: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black mb-24">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white p-8 text-center">
                            <h3 className="text-3xl md:text-4xl font-bold font-display text-black mb-2">
                                {metric.value}
                            </h3>
                            <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Partner Logo Wall */}
                <div>
                    <h2 className="text-3xl font-bold font-display text-black mb-12 text-center">Trusted Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnerCategories.map((group, index) => (
                            <div key={index} className="border border-black p-6">
                                <h3 className="text-lg font-bold font-display text-black mb-4 border-b border-gray-200 pb-2">
                                    {group.category}
                                </h3>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="text-gray-600 font-mono text-sm">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 font-mono">
                            * 정부기관, 대기업, 호텔 등 300여 개 고객사와 함께합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrackRecordSummary;
