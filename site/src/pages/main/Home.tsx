import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../../components/sections/HomeHero';
import MainBusiness from '../../components/sections/MainBusiness';
import HomeStrengths from '../../components/sections/HomeStrengths';
import HomeInvestorTeaser from '../../components/sections/HomeInvestorTeaser';

const Home: React.FC = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>GroundK - B2B Mobility Platform</title>
                <meta name="description" content="그라운드케이는 메가 이벤트 셔틀, 비즈니스 모빌리티 플랫폼, PMS 솔루션을 제공하는 B2B 모빌리티 기업입니다." />
            </Helmet>
            <HomeHero />
            <MainBusiness />

            {/* Reference Logo Slider */}
            <section className="py-16 bg-white border-b border-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                        Trusted by Government &amp; Global Leaders
                    </p>
                </div>
                <div className="flex justify-center flex-wrap gap-4 md:gap-8 opacity-70 max-w-5xl mx-auto">
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">APEC 2025</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">외교부</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">문화체육관광부</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">한국은행</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">CHANEL</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">Louis Vuitton</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">Dior</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">현대자동차</span>
                    <span className="text-sm font-bold font-display text-gray-500 border border-gray-400 px-3 py-1 bg-gray-50">SM C&amp;C</span>
                </div>
                <p className="text-center text-sm text-gray-500 mt-6 max-w-3xl mx-auto px-6">
                    68개국 참가 ADB 연차총회부터 Louis Vuitton Pre-Fall까지, 그라운드케이가 함께했습니다
                </p>
            </section>

            <HomeStrengths />
            <HomeInvestorTeaser />
        </div>
    );
};

export default Home;
