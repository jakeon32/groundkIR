import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MainInvestmentHighlights from '../../components/sections/MainInvestmentHighlights';
import MainKPI from '../../components/sections/MainKPI';
import IRLatestMaterials from '../../components/sections/ir/IRLatestMaterials';
import IRNewsSummary from '../../components/sections/ir/IRNewsSummary';
import IRCalendarTeaser from '../../components/sections/ir/IRCalendarTeaser';

const IRHome: React.FC = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>Investor Relations - GroundK</title>
                <meta name="description" content="그라운드케이의 주요 성과와 투자 포인트를 한눈에 볼 수 있는 IR 메인 페이지입니다." />
            </Helmet>

            {/* IR Hero */}
            <section className="border-b border-black">
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                            Investor Relations
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight font-display tracking-tight break-keep">
                            대한민국 4개 정상회의의<br />
                            공식 수송 파트너
                        </h1>
                        <p className="text-xl text-gray-700 mb-4 font-normal max-w-2xl break-keep">
                            GroundK의 주요 성과와 투자 포인트를 한눈에 볼 수 있는 IR 페이지입니다.
                        </p>
                        <p className="text-base text-gray-500 mb-10 max-w-2xl break-keep">
                            운수산업의 디지털 전환을 이끄는 B2B 모빌리티 플랫폼 기업
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Link to="/contact" className="flex items-center space-x-2 bg-black text-white px-8 py-3 font-bold border border-black hover:bg-white hover:text-black transition-colors">
                                <span>IR 미팅 문의</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="aspect-[4/3] w-full bg-gray-100 border border-black relative image-placeholder">
                        <div className="text-center p-4">
                            <p className="font-bold text-lg mb-2">IR 히어로 이미지</p>
                            <p className="text-xs text-gray-500">
                                [연출 예시: APEC 정상회의 의전 수행 장면]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <MainInvestmentHighlights />
            <MainKPI />
            <IRLatestMaterials />
            <IRNewsSummary />
            <IRCalendarTeaser />

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6 border border-black p-12 bg-gray-50">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
                        Investor Resources
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold font-display text-black mb-6">
                        GroundK의 재무현황, 트랙레코드, 향후 성장전략에 대해 더 알고 싶으시다면
                    </p>
                    <p className="text-gray-600 mb-10 text-lg">
                        자료를 요청하시거나, 직접 미팅을 문의해 주세요.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-black text-white px-10 py-4 font-bold border border-black hover:bg-gray-800 transition-colors inline-flex items-center justify-center text-lg">
                            <span>IR 미팅 및 자료 요청</span>
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-gray-500 font-mono">
                        ir@groundk.co.kr | 02-863-3540
                    </p>
                </div>
            </section>
        </div>
    );
};

export default IRHome;
