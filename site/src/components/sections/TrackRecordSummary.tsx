import React from 'react';

const metrics = [
    { label: '정상회의 수행', value: '4회' },
    { label: '수행 국가', value: '50+개국' },
    { label: '글로벌 클라이언트', value: '160+개' },
    { label: '누적 프로젝트', value: '130+건' },
    { label: '럭셔리 브랜드 행사', value: '10+건' },
    { label: '무사고 운영', value: '9년' }
];

const partners = [
    'Government', 'Public Inst.', 'Global Corp.', 'Hotel & Resort',
    'Travel Agency', 'MICE Org.', 'Entertainment', 'IT Platform'
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {partners.map((partner, index) => (
                            <div key={index} className="aspect-[3/2] border border-black flex items-center justify-center bg-gray-50 hover:bg-white transition-colors">
                                <span className="font-bold text-gray-400 text-lg text-center px-4">
                                    {partner}<br />LOGO
                                </span>
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
