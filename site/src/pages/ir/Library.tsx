import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, File, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

const documents = [
    {
        category: 'IR Deck',
        items: [
            { title: '그라운드케이 IR Deck 2025', desc: '회사소개·시장분석·사업모델·팀·재무·로드맵', version: 'v2.0', date: '2025.06', icon: FileText },
        ],
    },
    {
        category: 'Company One-pager / Fact Sheet',
        items: [
            { title: 'Company One-pager', desc: '1페이지 핵심 요약 자료', version: 'v1.0', date: '2025.06', icon: File },
            { title: 'Company Fact Sheet', desc: '기업 기본 정보 요약표', version: 'v1.0', date: '2025.06', icon: File },
        ],
    },
    {
        category: '제품/솔루션 브로슈어',
        items: [
            { title: 'T-RiseUp 솔루션 소개서', desc: 'PMS/TMS 제품 개요 및 도입 효과', version: 'v1.0', date: '2025.03', icon: Folder },
            { title: 'RIDEUS 셔틀 서비스 소개서', desc: '셔틀 운영 대행 서비스 안내', version: 'v1.0', date: '2025.03', icon: Folder },
        ],
    },
    {
        category: '기타 공식 자료',
        items: [
            { title: '정부 과제 선정 관련 소개', desc: '정부 과제 참여 및 선정 이력 요약', version: 'v1.0', date: '2025.01', icon: File },
        ],
    },
];

const Library: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>IR Library - GroundK IR</title>
                <meta name="description" content="그라운드케이 IR Deck, One-pager, 솔루션 브로슈어 등 투자자용 자료를 확인하세요." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR Library
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Available IR Materials
                </p>
            </div>

            {/* Documents */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    {documents.map((group, gi) => (
                        <div key={gi}>
                            <h2 className="text-xl font-bold font-display text-black mb-6 border-b border-black pb-2">
                                {group.category}
                            </h2>
                            <div className="space-y-4">
                                {group.items.map((item, ii) => (
                                    <div key={ii} className="border border-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-50 transition-colors gap-6 md:gap-0">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 border border-black bg-gray-100 flex items-center justify-center shrink-0">
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-black mb-1">{item.title}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                                                <div className="flex items-center space-x-3 text-xs font-mono text-gray-400">
                                                    <span>{item.version}</span>
                                                    <span>|</span>
                                                    <span>{item.date}</span>
                                                    <span>|</span>
                                                    <span>PDF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/contact" className="shrink-0 border border-black px-6 py-3 font-bold text-sm bg-white hover:bg-black hover:text-white transition-colors w-full md:w-auto text-center">
                                            자료 요청하기
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact for Materials */}
            <section className="py-16 bg-gray-50 border-t border-black text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm text-gray-500 font-mono mb-6">
                        추가 자료가 필요하시거나 바로 미팅을 원하시면 담당자에게 문의해 주세요.
                    </p>
                    <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors">
                        IR 문의 바로가기
                    </Link>
                    <p className="mt-6 text-sm font-bold text-black">
                        ir@groundk.co.kr | 02-863-3540
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Library;
