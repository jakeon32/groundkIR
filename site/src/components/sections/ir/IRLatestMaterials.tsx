import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const materials = [
    { title: 'IR Deck 2025', desc: '회사소개·시장분석·사업모델·팀·재무·로드맵', type: 'PDF', icon: FileText },
    { title: 'Company One-pager', desc: '1페이지 핵심 요약 자료', type: 'PDF', icon: FileText },
];

const IRLatestMaterials: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                            Latest IR Materials
                        </h2>
                        <p className="text-2xl font-bold font-display text-black">IR 자료 안내</p>
                    </div>
                    <Link to="/ir/library" className="text-sm font-bold text-black hover:underline">
                        전체 자료실 →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {materials.map((item, index) => (
                        <div key={index} className="border border-black p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="w-10 h-10 border border-black bg-gray-100 flex items-center justify-center shrink-0">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                    <span className="text-xs font-mono text-gray-400 mt-1 block">{item.type}</span>
                                </div>
                            </div>
                            <Link to="/contact" className="text-sm font-bold text-black border-t border-black pt-4 w-full flex items-center justify-between hover:underline">
                                자료 요청하기
                                <span className="font-mono">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IRLatestMaterials;
