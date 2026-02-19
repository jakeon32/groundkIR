import React from 'react';
import { Helmet } from 'react-helmet-async';

const Financials: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Financials - GroundK IR</title>
                <meta name="description" content="그라운드케이의 재무 하이라이트, 매출 추이, 투자 이력, 핵심 지표를 확인하세요." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Financials
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Financial Highlights &amp; Key Metrics
                </p>
            </div>

            {/* Financial Highlights */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Financial Highlights</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">매출 성장 추이</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-black mb-12">
                        {[
                            { year: '2021', revenue: '10억원', growth: '—' },
                            { year: '2022', revenue: '30억원', growth: 'YoY +206%' },
                            { year: '2023', revenue: '51억원', growth: 'YoY +70%' },
                            { year: '2024', revenue: 'TBD', growth: '결산 후 업데이트' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 border-r border-b border-black text-center">
                                <p className="text-xs font-mono text-gray-400 mb-2">{item.year}</p>
                                <p className="text-2xl font-bold font-display text-black mb-1">{item.revenue}</p>
                                <p className="text-xs font-mono text-gray-500">{item.growth}</p>
                            </div>
                        ))}
                    </div>

                    {/* Revenue Chart Placeholder */}
                    <div className="max-w-4xl mx-auto h-64 border border-black bg-gray-50 flex items-center justify-center image-placeholder">
                        <p className="text-gray-500 font-mono text-sm">
                            [그래프 영역: 연도별 매출 성장 추이 차트]
                        </p>
                    </div>
                </div>
            </section>

            {/* Revenue Structure */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Revenue Structure</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">사업별 매출 구조</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { service: '맞춤형 이동서비스', type: '프로젝트 기반', model: '건당 서비스 계약', note: '현금흐름 확보원' },
                            { service: 'T-RiseUp', type: 'SaaS 구독', model: '월/연 구독 + 커스터마이징', note: '반복매출 (Recurring)' },
                            { service: 'RIDEUS', type: '운영 대행', model: '수수료 + 플랫폼 이용료', note: '반복매출 (Recurring)' },
                        ].map((item, i) => (
                            <div key={i} className="border border-black p-6">
                                <h3 className="text-lg font-bold text-black mb-4 font-display">{item.service}</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">수익 유형</span>
                                        <span className="font-bold text-black">{item.type}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500">과금 모델</span>
                                        <span className="font-bold text-black">{item.model}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">특성</span>
                                        <span className="font-bold text-black">{item.note}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Revenue Mix Placeholder */}
                    <div className="max-w-4xl mx-auto h-48 border border-black bg-gray-50 flex items-center justify-center image-placeholder mt-12">
                        <p className="text-gray-500 font-mono text-sm">
                            [그래프 영역: 사업별 매출 비중 차트 (Placeholder)]
                        </p>
                    </div>
                </div>
            </section>

            {/* Investment History */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Investment History</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">투자 이력</p>

                    <div className="border border-black">
                        <div className="grid grid-cols-4 bg-black text-white text-sm font-bold p-4">
                            <span>시기</span>
                            <span>라운드</span>
                            <span>규모</span>
                            <span>비고</span>
                        </div>
                        <div className="grid grid-cols-4 text-sm p-4 border-t border-gray-200">
                            <span className="font-mono">2021</span>
                            <span>Seed</span>
                            <span>10억 규모</span>
                            <span className="text-gray-500">기술 개발 및 사업 확장</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Key Metrics</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">핵심 지표</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-black">
                        {[
                            { label: '2022 흑자 전환', value: '흑자' },
                            { label: '2023 매출 성장', value: '5배 (vs 2021)' },
                            { label: '연간 프로젝트', value: '130+건' },
                            { label: '무사고 운영', value: '9년 연속' },
                            { label: '글로벌 클라이언트', value: '160+개' },
                            { label: '네트워크 국가', value: '50+개국' },
                            { label: '럭셔리 브랜드 행사', value: '10+건' },
                            { label: '특허/저작권', value: '3건' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 border-r border-b border-black bg-white text-center">
                                <p className="text-xl font-bold font-display text-black mb-1">{item.value}</p>
                                <p className="text-xs font-mono text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Financials;
