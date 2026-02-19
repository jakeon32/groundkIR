import React from 'react';

const strengths = [
    {
        label: '01',
        title: '운영력',
        desc: '9년 무사고 운영, 정상회의 4회 포함 130+건 프로젝트 수행. 국가급 행사를 완벽하게 실행하는 현장 역량.',
    },
    {
        label: '02',
        title: '기술력',
        desc: 'VMS 관제, PMS 배차 시스템, 셔틀 예약 플랫폼 등 자체 개발 기술로 운수산업의 디지털 전환을 선도.',
    },
    {
        label: '03',
        title: '글로벌 네트워크',
        desc: '50+개국 차량 네트워크를 기반으로 글로벌 의전·수송 서비스 제공. 160+개 클라이언트와 협업.',
    },
    {
        label: '04',
        title: '신뢰도',
        desc: '외교부, APEC, Louis Vuitton, Dior 등 정부·국제기구·글로벌 럭셔리 브랜드로부터 검증된 파트너.',
    },
];

const HomeStrengths: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-sm font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Why GroundK
                </h2>
                <p className="text-3xl font-bold font-display text-black mb-12">핵심 강점</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strengths.map((item, index) => (
                        <div key={index} className="border-t border-black pt-6">
                            <span className="text-xs font-mono font-bold text-gray-400">{item.label}</span>
                            <h3 className="text-xl font-bold text-black mt-2 mb-4 font-display">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeStrengths;
