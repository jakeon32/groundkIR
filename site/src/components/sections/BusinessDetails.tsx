import React from 'react';
import { Check } from 'lucide-react';

const services = [
    {
        id: 'service',
        title: 'GroundK Global',
        subtitle: 'Premium Mobility Service',
        desc: '국내외 VIP 의전 및 대규모 MICE 행사를 위한 최상위 이동 서비스입니다. 자체 보유한 고급 차량과 전문 의전 기사(Chauffeur)를 통해 빈틈없는 서비스를 제공합니다.',
        features: [
            '국제회의/정상회의 공식 수송 (G20, APEC 등)',
            '기업 VIP 의전 및 공항 영접',
            '실시간 관제 시스템 기반의 운행 모니터링',
            '다국어 가능 전담 매니저 배정'
        ]
    },
    {
        id: 'saas',
        title: 'T-RiseUp',
        subtitle: 'All-in-One Mobility SaaS',
        desc: '운수 회사의 복잡한 업무(예약, 배차, 정산, 고객관리)를 엑셀 없이 해결하는 클라우드 솔루션입니다. 디지털 전환을 통해 운영 효율을 극대화합니다.',
        features: [
            '실시간 예약 및 자동 배차 시스템',
            '기사용 앱 & 고객용 알림톡 연동',
            '거래명세서 자동 발행 및 미수금 관리',
            '다양한 운수사(전세버스, 렌터카, 택시) 맞춤형 설정'
        ]
    },
    {
        id: 'platform',
        title: 'RIDEUS',
        subtitle: 'On-Demand Shuttle Platform',
        desc: '기업 통근, 행사 셔틀, 테마파크 이동 등 정기적이고 반복적인 이동 수요를 최적의 운수사와 연결하는 중개 플랫폼입니다.',
        features: [
            'AI 기반 최적 경로 라우팅 설계',
            '탑승객용 셔틀 위치 확인 앱 제공',
            'QR 코드 탑승권 및 이용 현황 데이터 분석',
            '전국 160개 파트너 운수사 네트워크 활용'
        ]
    }
];

const BusinessDetails: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {services.map((service, index) => (
                    <div key={service.id} id={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-12 border-t border-black first:border-0 first:pt-0">
                        {/* Content */}
                        <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className="inline-block border border-black px-3 py-1 text-xs font-bold mb-4 bg-gray-100">
                                SERVICE 0{index + 1}
                            </div>
                            <h3 className="text-4xl font-bold font-display text-black mb-2">{service.title}</h3>
                            <p className="text-xl text-gray-500 font-mono mb-6">{service.subtitle}</p>

                            <p className="text-gray-800 text-lg leading-relaxed mb-8">
                                {service.desc}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start space-x-3 text-gray-700">
                                        <Check size={20} className="text-black flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Placeholder */}
                        <div className={`aspect-video w-full bg-white border border-black relative image-placeholder ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            <div className="text-center p-4">
                                <p className="font-bold text-lg mb-2">{service.title} 서비스 예시</p>
                                <p className="text-xs text-gray-500">
                                    [화면: {service.id === 'saas' ? 'T-RiseUp 대시보드 UI' : service.id === 'platform' ? '셔틀 위치 확인 앱 화면' : '의전 수행 현장 사진'}]
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusinessDetails;
