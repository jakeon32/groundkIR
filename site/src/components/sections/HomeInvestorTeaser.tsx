import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeInvestorTeaser: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="border border-black p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">For Investors</p>
                            <h2 className="text-2xl md:text-3xl font-bold font-display text-black">
                                Investment Highlights
                            </h2>
                        </div>
                        <Link to="/ir" className="flex items-center text-black font-bold text-sm border border-black px-4 py-2 mt-4 md:mt-0 hover:bg-black hover:text-white transition-colors">
                            <span>IR 자료 보기</span>
                            <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black">
                        <div className="p-6 border-r border-b border-black">
                            <h3 className="text-3xl font-bold text-black font-display mb-2">4회</h3>
                            <p className="text-sm text-gray-600 font-mono">정상회의 공식 수송</p>
                        </div>
                        <div className="p-6 border-r border-b border-black">
                            <h3 className="text-3xl font-bold text-black font-display mb-2">51억원</h3>
                            <p className="text-sm text-gray-600 font-mono">2023 매출 (YoY 70%↑)</p>
                        </div>
                        <div className="p-6 border-r border-b border-black">
                            <h3 className="text-3xl font-bold text-black font-display mb-2">3개</h3>
                            <p className="text-sm text-gray-600 font-mono">사업 라인 (서비스 + SaaS + 플랫폼)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInvestorTeaser;
