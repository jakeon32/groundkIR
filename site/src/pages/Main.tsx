import React from 'react';
import MainHero from '../components/sections/MainHero';
import MainKPI from '../components/sections/MainKPI';
import MainBusiness from '../components/sections/MainBusiness';
import { ArrowRight } from 'lucide-react';

const Main: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <MainHero />
            <MainKPI />
            <MainBusiness />

            {/* Reference Logo Slider - Wireframe */}
            <section className="py-16 bg-white border-b border-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                        Trusted by Government & Global Leaders
                    </p>
                </div>
                <div className="flex justify-center flex-wrap gap-4 md:gap-8 opacity-70 max-w-5xl mx-auto">
                    {/* Partners List: Government -> Luxury -> Corporate */}
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">문화체육관광부</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">산업통상자원부</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">외교부</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">한국은행</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">서울관광재단</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">APEC 2025</span>

                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">CHANEL</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">Louis Vuitton</span>

                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">현대자동차</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">롯데카드</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">AFC</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">NOL UNIVERSE</span>
                </div>
            </section>

            {/* Bottom CTA - Wireframe */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6 border border-black p-12 bg-gray-50">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-black">
                        Ready to Explore?
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg">
                        그라운드케이의 상세한 IR 자료를 확인해보세요.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-black text-white px-8 py-3 font-bold border border-black hover:bg-white hover:text-black transition-colors">
                            IR Deck 다운로드
                        </button>
                        <button className="bg-white text-black px-8 py-3 font-bold border border-black hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                            <span>미팅 요청하기</span>
                            <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
