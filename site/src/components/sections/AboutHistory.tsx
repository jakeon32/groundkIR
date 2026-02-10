import React from 'react';

const historyData = [
    {
        year: '2025',
        events: [
            { text: 'APEC 정상회의 수송 수주 (금호고속 공동)', highlight: true },
            { text: 'VMS 기술 도입 및 고도화' },
            { text: '관광벤처의날 우수기업 (한국관광공사장 표창)' },
            { text: '부산 서비스 강소기업 선정' }
        ]
    },
    {
        year: '2024',
        events: [
            { text: 'MICE 우수기업 (부산시장 표창)' },
            { text: 'MICE 대상 디지털전환 부문 수상' },
            { text: '관광플러스테크 기업 선정 (한국관광공사)' },
            { text: '부산광역시 전략산업 선도기업' }
        ]
    },
    {
        year: '2023',
        events: [
            { text: 'ADB 연차총회 68개국 의전 총괄' },
            { text: 'Louis Vuitton Pre-Fall / CHANEL Metiers d\'Art 수행' },
            { text: '매출 51억원 달성 (YoY 70%↑)', highlight: true },
            { text: '부산형 히든챔피언 선정' }
        ]
    },
    {
        year: '2022',
        events: [
            { text: 'Dior Fall Show 서울 수송 총괄' },
            { text: '싱가포르 현지법인 설립' },
            { text: '매출 30억원 달성 (흑자 전환)', highlight: true },
            { text: '기술평가 T-4 등급 획득' }
        ]
    },
    {
        year: '2021',
        events: [
            { text: 'T-RiseUp 서비스 출시' },
            { text: 'Pre-A 투자 유치', highlight: true },
            { text: '벤처기업 인증' }
        ]
    },
    {
        year: '2016',
        events: [
            { text: '그라운드케이 설립', highlight: true },
            { text: '기업부설연구소 인정' }
        ]
    }
];

const AboutHistory: React.FC = () => {
    return (
        <section className="py-20 border-b border-black">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold font-display text-black mb-16 text-center">History</h2>

                <div className="relative border-l border-black ml-4 md:ml-1/2 md:-translate-x-px">
                    {historyData.map((item, index) => (
                        <div key={index} className="mb-12 relative">
                            {/* Year Marker */}
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-black rounded-none"></div>

                            <div className={`md:flex items-start w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Year Label */}
                                <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                                    <span className="text-2xl font-bold font-mono text-black block mb-2">{item.year}</span>
                                </div>

                                {/* Events List */}
                                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <ul className="space-y-2 pt-1">
                                        {item.events.map((event, eIndex) => (
                                            <li key={eIndex} className={`text-sm ${event.highlight ? 'font-bold text-black' : 'text-gray-600'}`}>
                                                {event.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHistory;
