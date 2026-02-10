import React from 'react';
import { ArrowRight } from 'lucide-react';

const businesses = [
    {
        title: '맞춤형 이동서비스',
        subtitle: 'MICE & VIP',
        desc: '정상회의부터 럭셔리 브랜드까지\n연 130+건 프로젝트 수행',
        link: '/business#service'
    },
    {
        title: 'T-RiseUp',
        subtitle: 'Mobility SaaS',
        desc: '운수사의 예약·배차·관제를\n하나의 클라우드에서 해결',
        link: '/business#saas'
    },
    {
        title: 'RIDEUS',
        subtitle: 'Shuttle Platform',
        desc: '기업 통근, 행사 셔틀 등\n맞춤형 셔틀 운영 대행',
        link: '/business#platform'
    }
];

const MainBusiness: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold font-display text-black">Business Portfolio</h2>
                        <p className="text-gray-600 mt-2">운수산업의 모든 영역을 커버하는 3가지 핵심 사업</p>
                    </div>
                    <a href="/business" className="text-black font-bold flex items-center hover:underline mt-4 md:mt-0">
                        View All Portfolios <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {businesses.map((biz, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black p-8 flex flex-col h-full hover:bg-gray-50 transition-colors"
                        >
                            {/* Icon Placeholder */}
                            <div className="w-12 h-12 border border-black bg-gray-100 mb-6 flex items-center justify-center font-mono text-xs">
                                ICON
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-1 font-display">{biz.title}</h3>
                            <p className="text-sm font-semibold text-gray-500 mb-6 font-mono uppercase">{biz.subtitle}</p>

                            <p className="text-gray-800 mb-8 leading-relaxed whitespace-pre-line flex-grow">
                                {biz.desc}
                            </p>

                            <a href={biz.link} className="inline-flex items-center text-black font-bold text-sm border border-black px-4 py-2 self-start hover:bg-black hover:text-white transition-colors">
                                <span>DETAILS</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainBusiness;
