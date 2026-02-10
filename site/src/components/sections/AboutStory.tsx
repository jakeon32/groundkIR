import React from 'react';

const AboutStory: React.FC = () => {
    return (
        <section className="py-20 border-b border-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image Placeholder */}
                <div className="w-full aspect-square md:aspect-[4/5] bg-gray-100 border border-black relative image-placeholder">
                    <div className="text-center p-4">
                        <p className="font-bold text-lg mb-2">CEO 사진 영역</p>
                        <p className="text-xs text-gray-500">
                            [연출 예시: 현장 지휘 모습 또는 정장 프로필]
                        </p>
                    </div>
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-black mb-8 leading-tight break-keep">
                        수기 배차, 엑셀 관리, 전화 연락 —<br />
                        국제행사 차량 500대를 운영하는 현장의 현실이었습니다.
                    </h2>
                    <div className="space-y-6 text-gray-800 leading-relaxed font-serif text-lg">
                        <p className="break-keep">
                            그라운드케이는 그 현장에서 출발했습니다.<br />
                            운수산업에 필요한 건 경험이 아닌 시스템이라는 확신으로, 2016년, 교통 인프라와 ICT 기술을 결합해 <strong>운수산업의 디지털 전환(Digital Transformation)</strong>을 시작했습니다. 기술로 증명하는 견고한 성장을 이어가고 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
