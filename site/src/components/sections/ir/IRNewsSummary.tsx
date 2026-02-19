import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentNews = [
    { date: '2026.02.05', title: '산업단지 통근버스의 혁신, 부산 산단타요가 선택한 그라운드케이', category: '회사소식' },
    { date: '2026.01.20', title: 'APEC 2025 KOREA 정상회의 차량 의전 수행 완료', category: '의전수송' },
    { date: '2025.12.15', title: '관광벤처의날 우수기업 한국관광공사장 표창 수상', category: '회사소식' },
    { date: '2025.11.28', title: '2025 SBS 가요대전 Summer 외국인 셔틀 운영', category: '라이더스' },
];

const IRNewsSummary: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                            IR News
                        </h2>
                        <p className="text-2xl font-bold font-display text-black">최근 소식</p>
                    </div>
                    <Link to="/ir/news" className="text-sm font-bold text-black hover:underline">
                        전체 뉴스 →
                    </Link>
                </div>

                <div className="border-t border-black">
                    {recentNews.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 px-2 transition-colors">
                            <div className="flex items-center space-x-4 min-w-0">
                                <span className="text-xs font-mono text-gray-400 shrink-0">{item.date}</span>
                                <span className="text-xs font-mono font-bold bg-gray-100 border border-gray-300 px-2 py-0.5 shrink-0">{item.category}</span>
                                <p className="text-sm text-black font-medium truncate">{item.title}</p>
                            </div>
                            <ArrowRight size={14} className="text-gray-400 shrink-0 ml-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IRNewsSummary;
