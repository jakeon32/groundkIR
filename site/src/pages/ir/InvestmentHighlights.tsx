import React from 'react';
import { Helmet } from 'react-helmet-async';
import BusinessStructure from '../../components/sections/BusinessStructure';
import TrackRecordSummary from '../../components/sections/TrackRecordSummary';

const InvestmentHighlights: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Investment Highlights - GroundK IR</title>
                <meta name="description" content="그라운드케이의 시장 기회, 솔루션 포트폴리오, 트랙레코드, 성장 전략을 투자자 관점에서 소개합니다." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Investment Highlights
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Company at a Glance
                </p>
            </div>

            {/* Company Snapshot */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Company at a Glance</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12 break-keep">
                        37명 규모 기업이 국가급 레퍼런스를 보유한<br className="hidden md:block" />
                        유일한 B2B 모빌리티 플랫폼
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-black">
                        {[
                            { value: '2016', label: '설립' },
                            { value: '37명', label: '임직원' },
                            { value: '51억원', label: '2023 매출' },
                            { value: '3개', label: '사업 라인' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 border-r border-b border-black text-center">
                                <p className="text-2xl font-bold font-display text-black mb-1">{item.value}</p>
                                <p className="text-xs font-mono text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Problem &amp; Market Opportunity</h2>
                    <p className="text-3xl font-bold font-display text-black mb-8">시장 기회</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { market: '글로벌 MICE 시장', tam: 'TAM: $000B+', desc: '국제행사·의전·VIP 수송 시장', service: '맞춤형 이동서비스' },
                            { market: '국내 전세버스 운수사', tam: 'TAM: 약 5,000개사', desc: '예약·배차·관제 디지털화 수요', service: 'T-RiseUp' },
                            { market: '기업 통근셔틀 시장', tam: 'TAM: 연 0,000억원', desc: '기업·행사·아파트 셔틀 운영 대행', service: 'RIDEUS' },
                        ].map((item, i) => (
                            <div key={i} className="border border-black p-6">
                                <p className="text-xs font-mono text-gray-400 uppercase mb-2">{item.service}</p>
                                <h3 className="text-lg font-bold text-black mb-2 font-display">{item.market}</h3>
                                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                                <p className="text-xs font-mono font-bold text-gray-500 border-t border-gray-200 pt-3">
                                    {item.tam}
                                    <span className="text-gray-400 ml-2">* 구체 수치 리서치 후 확정</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Portfolio */}
            <BusinessStructure />

            {/* Track Record Highlights */}
            <div className="border-t border-black">
                <div className="max-w-7xl mx-auto px-6 pt-12">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Track Record</h2>
                    <p className="text-3xl font-bold font-display text-black mb-2">검증된 실행력</p>
                </div>
                <TrackRecordSummary />
            </div>

            {/* Growth Strategy */}
            <section className="py-20 bg-gray-50 border-t border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Growth Strategy</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">성장 전략</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { phase: 'Phase 1', title: '서비스 운영 고도화', desc: '정상회의급 레퍼런스를 기반으로 글로벌 MICE 시장 확대. VMS 기술 도입으로 운영 효율 극대화.' },
                            { phase: 'Phase 2', title: 'SaaS 플랫폼 확산', desc: 'T-RiseUp PMS/TMS를 국내 운수사 시장에 본격 확산. 모듈형 구조로 도입 장벽 최소화.' },
                            { phase: 'Phase 3', title: '플랫폼 스케일업', desc: 'RIDEUS 셔틀 플랫폼을 기업 통근·행사·아파트 셔틀까지 확장. B2B2C 모델로 반복매출 극대화.' },
                        ].map((item, i) => (
                            <div key={i} className="border-t border-black pt-6">
                                <span className="text-xs font-mono font-bold text-gray-400">{item.phase}</span>
                                <h3 className="text-xl font-bold text-black mt-2 mb-4 font-display">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvestmentHighlights;
