import React from 'react';

const highlights = [
    {
        label: 'Market Position',
        title: '국가급 행사 수행 능력',
        desc: '정상회의 4회 공식 수송 — 37명 규모 기업이 국가급 레퍼런스를 보유한 유일한 사례',
    },
    {
        label: 'Track Record',
        title: '검증된 실행력',
        desc: '9년간 50+개국, 160+ 클라이언트, 130+건 프로젝트를 무사고로 수행',
    },
    {
        label: 'Revenue Model',
        title: '3중 수익 구조',
        desc: '서비스(현금흐름) + SaaS(반복매출) + 플랫폼(스케일) — 안정성과 성장성 동시 확보',
    },
    {
        label: 'Scalability',
        title: 'SaaS·플랫폼 확장',
        desc: '현장 운영 노하우가 T-RiseUp·RIDEUS 제품 경쟁력으로 전환, TAM 확대 중',
    },
];

const MainInvestmentHighlights: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                        Investment Highlights
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold font-display text-black">
                        투자자가 주목해야 할 4가지 포인트
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white border-r border-b border-black hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                                {item.label}
                            </span>
                            <h3 className="text-xl font-bold text-black mt-3 mb-4 font-display">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainInvestmentHighlights;
