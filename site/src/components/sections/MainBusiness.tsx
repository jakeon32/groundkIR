import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const businesses = [
    {
        title: '맞춤형 이동서비스',
        subtitle: 'Revenue Driver #1',
        revenueType: '프로젝트 기반 서비스 계약 → 현금흐름 확보',
        desc: '정상회의부터 럭셔리 브랜드까지\n연 130+건 프로젝트 수행',
        link: '/solutions#service'
    },
    {
        title: 'T-RiseUp',
        subtitle: 'Revenue Driver #2',
        revenueType: 'SaaS 구독 + 커스터마이징 → 반복매출',
        desc: '운수사의 예약·배차·관제를\n하나의 클라우드에서 해결',
        link: '/solutions#saas'
    },
    {
        title: 'RIDEUS',
        subtitle: 'Revenue Driver #3',
        revenueType: '운영 대행 수수료 + 플랫폼 이용료 → 반복매출',
        desc: '기업 통근, 행사 셔틀 등\n맞춤형 셔틀 운영 대행',
        link: '/solutions#platform'
    }
];

const MainBusiness: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
                    <div>
                        <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                            Revenue Drivers
                        </h2>
                        <p className="text-3xl font-bold font-display text-black">Business Portfolio</p>
                        <p className="text-gray-600 mt-2">서비스 운영으로 현금흐름 확보, SaaS·플랫폼으로 반복매출 구축</p>
                    </div>
                    <Link to="/ir/investment-highlights" className="text-black font-bold flex items-center hover:underline mt-4 md:mt-0">
                        투자포인트 자세히 보기 <ArrowRight size={16} className="ml-1" />
                    </Link>
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

                            <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">{biz.subtitle}</p>
                            <h3 className="text-2xl font-bold text-black mb-4 font-display">{biz.title}</h3>

                            <p className="text-gray-800 mb-4 leading-relaxed whitespace-pre-line flex-grow">
                                {biz.desc}
                            </p>

                            <p className="text-xs text-gray-500 font-mono border-t border-gray-200 pt-4 mb-6">
                                {biz.revenueType}
                            </p>

                            <Link to={biz.link} className="inline-flex items-center text-black font-bold text-sm border border-black px-4 py-2 self-start hover:bg-black hover:text-white transition-colors">
                                <span>DETAILS</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainBusiness;
