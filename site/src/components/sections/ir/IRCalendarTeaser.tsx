import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
    { date: '2026 Q1', title: 'IR Deck 업데이트 (2025 실적 반영)', type: 'IR Material' },
    { date: '2026 H1', title: '투자 설명회 / 데모데이', type: 'IR Event' },
    { date: '2026', title: 'MICE/컨퍼런스 참가 일정 TBD', type: 'Industry Event' },
];

const IRCalendarTeaser: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                            IR Calendar
                        </h2>
                        <p className="text-2xl font-bold font-display text-black">다가오는 일정</p>
                    </div>
                    <Link to="/ir/calendar" className="text-sm font-bold text-black hover:underline">
                        전체 일정 →
                    </Link>
                </div>

                <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className="border border-black bg-white p-5 flex items-center space-x-4">
                            <div className="w-10 h-10 border border-black bg-gray-100 flex items-center justify-center shrink-0">
                                <Calendar size={18} />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center space-x-3 mb-1">
                                    <span className="text-xs font-mono font-bold text-gray-500">{event.date}</span>
                                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 border border-gray-300">{event.type}</span>
                                </div>
                                <p className="text-sm font-medium text-black">{event.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IRCalendarTeaser;
