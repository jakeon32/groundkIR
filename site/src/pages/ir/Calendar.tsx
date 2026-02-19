import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const irEvents = [
    { date: '2026 Q1', title: 'IR Deck 업데이트 (2025 실적 반영)', type: 'IR Material', status: '예정' },
    { date: '2026 H1', title: '투자 설명회 / 데모데이', type: 'IR Event', status: '일정 조율 중' },
];

const industryEvents = [
    { date: '2025', title: 'APEC 2025 KOREA 정상회의 수송 수행 완료', type: 'Mega Event', status: '완료' },
    { date: '2025', title: '2025 SBS 가요대전 Summer 셔틀 운영', type: 'Entertainment', status: '완료' },
    { date: '2026', title: 'MICE/컨퍼런스 참가 일정 TBD', type: 'Industry', status: 'TBD' },
];

const IRCalendar: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>IR Calendar - GroundK IR</title>
                <meta name="description" content="그라운드케이의 IR 이벤트, 산업 행사 일정 및 IR 미팅 안내를 확인하세요." />
            </Helmet>

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR Calendar
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    IR Events &amp; Industry Schedule
                </p>
            </div>

            {/* IR Events */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">IR Events</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">IR 일정</p>

                    <div className="space-y-4">
                        {irEvents.map((event, index) => (
                            <div key={index} className="border border-black p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 border border-black bg-gray-100 flex items-center justify-center shrink-0">
                                        <CalendarIcon size={18} />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-1">
                                            <span className="text-xs font-mono font-bold text-gray-500">{event.date}</span>
                                            <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 border border-gray-300">{event.type}</span>
                                        </div>
                                        <p className="text-base font-medium text-black">{event.title}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-bold text-gray-400 border border-gray-300 px-3 py-1 shrink-0">{event.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Events */}
            <section className="py-20 border-b border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Industry Events</h2>
                    <p className="text-3xl font-bold font-display text-black mb-12">주요 산업 행사</p>

                    <div className="space-y-4">
                        {industryEvents.map((event, index) => (
                            <div key={index} className="border border-black p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 border border-black bg-gray-100 flex items-center justify-center shrink-0">
                                        <CalendarIcon size={18} />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3 mb-1">
                                            <span className="text-xs font-mono font-bold text-gray-500">{event.date}</span>
                                            <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 border border-gray-300">{event.type}</span>
                                        </div>
                                        <p className="text-base font-medium text-black">{event.title}</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-mono font-bold px-3 py-1 shrink-0 border ${event.status === '완료' ? 'bg-gray-100 text-gray-500 border-gray-300' : 'text-gray-400 border-gray-300'}`}>
                                    {event.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IR Meeting Info */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">IR Meeting</h2>
                    <p className="text-3xl font-bold font-display text-black mb-8">IR 미팅 안내</p>

                    <div className="border border-black bg-white p-8 md:p-12 max-w-3xl">
                        <p className="text-gray-700 leading-relaxed mb-8 break-keep">
                            그라운드케이의 사업 현황, 재무 실적, 향후 계획에 대해 더 자세히 알고 싶으시다면
                            IR 담당에게 미팅을 요청해 주세요.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-4">
                                <span className="text-xs font-mono text-gray-400 uppercase w-20">Email</span>
                                <a href="mailto:ir@groundk.co.kr" className="font-bold text-black hover:underline">ir@groundk.co.kr</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-xs font-mono text-gray-400 uppercase w-20">Phone</span>
                                <span className="font-bold text-black">02-863-3540</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-xs font-mono text-gray-400 uppercase w-20">Location</span>
                                <span className="text-sm text-gray-700">Seoul (Magok) / Busan (Centum)</span>
                            </div>
                        </div>

                        <Link to="/contact" className="inline-flex items-center bg-black text-white px-8 py-3 font-bold border border-black hover:bg-white hover:text-black transition-colors">
                            <span>미팅 요청하기</span>
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IRCalendar;
