import React from 'react';

const BusinessStructure: React.FC = () => {
    return (
        <section className="py-20 border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-display text-black mb-4">Business Architecture</h2>
                    <p className="text-lg text-gray-600">
                        오프라인 운송부터 온라인 예약/관제, 그리고 플랫폼 중개까지.<br />
                        그라운드케이는 운수산업의 벨류체인 전체를 연결합니다.
                    </p>
                </div>

                {/* Wireframe Diagram */}
                <div className="max-w-4xl mx-auto border border-black p-8 md:p-12 relative bg-gray-50">
                    <div className="absolute top-0 left-0 bg-black text-white text-xs font-mono px-2 py-1">
                        DIAGRAM: VALUE CHAIN
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Node 1 */}
                        <div className="w-full md:w-1/3 text-center p-6 border border-black bg-white">
                            <h3 className="font-bold text-xl mb-2">GroundK Global</h3>
                            <p className="text-sm text-gray-500 font-mono mb-4">Mobility Service</p>
                            <p className="text-xs text-gray-700">VIP 의전 / MICE 수송<br />직접 수행 (Offline)</p>
                        </div>

                        {/* Arrows */}
                        <div className="hidden md:flex flex-col items-center space-y-2">
                            <div className="h-px w-12 bg-black"></div>
                            <span className="text-xs font-mono">Data</span>
                            <div className="h-px w-12 bg-black"></div>
                        </div>

                        {/* Node 2 */}
                        <div className="w-full md:w-1/3 text-center p-6 border border-black bg-white relative">
                            {/* Core Label */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-0.5 text-xs font-bold">
                                CORE
                            </div>
                            <h3 className="font-bold text-xl mb-2">T-RiseUp</h3>
                            <p className="text-sm text-gray-500 font-mono mb-4">Mobility SaaS</p>
                            <p className="text-xs text-gray-700">PMS / ERP<br />클라우드 관제 (Online)</p>
                        </div>

                        {/* Arrows */}
                        <div className="hidden md:flex flex-col items-center space-y-2">
                            <div className="h-px w-12 bg-black"></div>
                            <span className="text-xs font-mono">Supply</span>
                            <div className="h-px w-12 bg-black"></div>
                        </div>

                        {/* Node 3 */}
                        <div className="w-full md:w-1/3 text-center p-6 border border-black bg-white">
                            <h3 className="font-bold text-xl mb-2">RIDEUS</h3>
                            <p className="text-sm text-gray-500 font-mono mb-4">Mobility Platform</p>
                            <p className="text-xs text-gray-700">네트워크 중개<br />Shared Mobility</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessStructure;
