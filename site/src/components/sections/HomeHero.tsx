import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 핵심 커리어 기반 슬라이드 데이터
const SLIDES = [
    {
        id: 1,
        title: "APEC 2025 KOREA\n공식 수송관리 파트너",
        description: "운수산업의 디지털 전환을 이끄는 B2B 모빌리티 플랫폼 기업",
        placeholderText: "[APEC 2025 정상회의 의전 수행 장면]"
    },
    {
        id: 2,
        title: "글로벌 럭셔리 브랜드가\n선택한 VIP 의전",
        description: "글로벌 이벤트의 프리미엄 이동 경험을 완벽하게 디자인합니다.",
        placeholderText: "[Louis Vuitton Pre-Fall VIP 수송 장면]"
    },
    {
        id: 3,
        title: "68개국 재무장관·총재단\n메가 이벤트 차량 지원",
        description: "9년 무사고 운영, 160+ 글로벌 클라이언트가 신뢰하는 오퍼레이션",
        placeholderText: "[ADB 연차총회 2023 68개국 수송 장면]"
    }
];

const HomeHero: React.FC = () => {
    return (
        <section className="relative w-full border-b border-black">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full bg-white shadow-[0_0_0_100vmax_white]"
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="bg-white">
                        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white relative z-10 w-full h-full">
                            {/* Left: Text Content */}
                            <div className="w-full">
                                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight font-display tracking-tight break-keep whitespace-pre-line">
                                    {slide.title}
                                </h1>
                                <p className="text-xl text-gray-700 mb-10 font-normal max-w-2xl break-keep">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center">
                                    <Link to="/contact" className="flex items-center space-x-2 bg-black text-white px-8 py-3 font-bold border border-black hover:bg-white hover:text-black transition-colors">
                                        <span>문의하기</span>
                                        <ArrowRight size={18} />
                                    </Link>
                                    <Link to="/ir" className="flex items-center space-x-2 text-gray-500 px-4 py-3 font-medium hover:text-black transition-colors">
                                        <span className="text-sm font-mono">For Investors</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Wireframe Image Placeholder */}
                            <div className="aspect-[4/3] w-full bg-gray-100 border border-black relative image-placeholder">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <p className="font-bold text-lg mb-2">메인 히어로 이미지 {slide.id}</p>
                                    <p className="text-xs text-gray-500">
                                        {slide.placeholderText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles overrides for Pagination to fit wireframe look */}
            <style>{`
                 .swiper-pagination-bullet-active {
                    background: black !important;
                }
                .swiper-pagination-bullet {
                    background: #9ca3af;
                    opacity: 1;
                }
                .swiper-pagination {
                    bottom: 1rem !important;
                    z-index: 20 !important;
                }
            `}</style>
        </section>
    );
};

export default HomeHero;
