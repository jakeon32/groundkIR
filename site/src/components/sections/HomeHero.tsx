import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
    return (
        <section className="relative w-full border-b border-black">
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div className="w-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight font-display tracking-tight break-keep">
                        운수산업의 디지털 전환을<br />
                        이끄는 B2B 모빌리티 플랫폼
                    </h1>
                    <p className="text-xl text-gray-700 mb-10 font-normal max-w-2xl break-keep">
                        대한민국 4개 정상회의의 공식 수송 파트너.<br />
                        메가 이벤트 셔틀, 비즈니스 모빌리티 플랫폼, PMS 솔루션을 제공합니다.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/solutions" className="flex items-center space-x-2 bg-black text-white px-8 py-3 font-bold border border-black hover:bg-white hover:text-black transition-colors">
                            <span>솔루션 보기</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="flex items-center space-x-2 border border-black text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors">
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
                    <div className="text-center p-4">
                        <p className="font-bold text-lg mb-2">메인 히어로 이미지</p>
                        <p className="text-xs text-gray-500">
                            [연출 예시: APEC 정상회의 의전 수행 장면 / 고급 세단 라인업]
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
