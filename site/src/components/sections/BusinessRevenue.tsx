import React from 'react';

const BusinessRevenue: React.FC = () => {
    return (
        <section className="py-20 border-t border-black bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-display text-black mb-4">Revenue Model</h2>
                    <p className="text-lg text-gray-600">
                        서비스 운영으로 현금흐름을 확보하고,<br />
                        SaaS와 플랫폼으로 반복 매출(Recurring Revenue)을 구축합니다.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto border border-black bg-white p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service */}
                        <div className="text-center border border-dashed border-gray-300 p-6 rounded-none">
                            <h3 className="font-bold text-xl mb-4 font-display">이동 서비스</h3>
                            <ul className="text-sm text-gray-700 space-y-2 mb-6 font-mono">
                                <li>프로젝트 기반</li>
                                <li>서비스 계약</li>
                                <li>(건당 매출)</li>
                            </ul>
                            <div className="bg-black text-white text-xs font-bold py-2 px-4 inline-block">
                                현금흐름 확보
                            </div>
                        </div>

                        {/* SaaS */}
                        <div className="text-center border border-dashed border-gray-300 p-6 rounded-none relative">
                            <div className="absolute top-0 right-0 bg-gray-200 text-[10px] px-2 py-1 font-bold">
                                HIGH MARGIN
                            </div>
                            <h3 className="font-bold text-xl mb-4 font-display">T-RiseUp</h3>
                            <ul className="text-sm text-gray-700 space-y-2 mb-6 font-mono">
                                <li>SaaS 구독</li>
                                <li>+ 커스터마이징 수수료</li>
                            </ul>
                            <div className="bg-gray-200 text-black text-xs font-bold py-2 px-4 inline-block border border-black">
                                반복 매출 (Recurring)
                            </div>
                        </div>

                        {/* Platform */}
                        <div className="text-center border border-dashed border-gray-300 p-6 rounded-none relative">
                            <div className="absolute top-0 right-0 bg-gray-200 text-[10px] px-2 py-1 font-bold">
                                SCALABLE
                            </div>
                            <h3 className="font-bold text-xl mb-4 font-display">RIDEUS</h3>
                            <ul className="text-sm text-gray-700 space-y-2 mb-6 font-mono">
                                <li>운영 대행 수수료</li>
                                <li>+ 플랫폼 이용료</li>
                            </ul>
                            <div className="bg-gray-200 text-black text-xs font-bold py-2 px-4 inline-block border border-black">
                                반복 매출 (Recurring)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessRevenue;
