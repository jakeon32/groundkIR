import React from 'react';

const kpiData = [
    { value: '4회', label: '정상회의 공식 수송', desc: '한-아세안, 한-태평양도서국, 한-아프리카, APEC 2025' },
    { value: '51억원', label: '2023 매출', desc: '전년 대비 70% 성장, 2021 대비 5배' },
    { value: '160+', label: '글로벌 클라이언트', desc: '50+개국 네트워크 기반' },
    { value: '3개', label: '사업 라인', desc: '이동 서비스 + SaaS + 셔틀 플랫폼' },
];

const MainKPI: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider">
                        Key Performance Indicators
                    </h2>
                    <span className="text-xs font-mono text-gray-400">
                        * As of 2024
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
                    {kpiData.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white border-r border-b border-black hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="text-4xl font-bold text-black mb-2 font-display">{item.value}</h3>
                            <p className="text-lg font-bold text-gray-900 mb-4">{item.label}</p>
                            <p className="text-sm text-gray-600 leading-relaxed font-mono">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainKPI;
