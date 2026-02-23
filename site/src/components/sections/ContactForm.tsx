import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactForm: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold font-display text-black mb-8">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-12">
                        그라운드케이의 성장에 관심이 있으신가요?<br />
                        궁금하신 점이나 IR 자료 요청은 문의하기 양식 또는 연락처를 통해 언제든 문의해 주세요.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="mt-1" />
                            <div>
                                <h4 className="font-bold">Headquarters</h4>
                                <p className="text-gray-600">서울시 강서구 마곡중앙로서 161-17, 7층</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail />
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-gray-600">ir@groundk.co.kr</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone />
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-gray-600">02-863-3540</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Inquiry Form */}
                <div className="border border-black p-8 bg-gray-50">
                    <h3 className="text-2xl font-bold font-display mb-6">Send Inquiry</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2">Name / Company</label>
                            <input type="text" className="w-full border border-black p-3 bg-white focus:outline-none focus:ring-1 focus:ring-black" placeholder="홍길동 / 한국투자증권" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Email</label>
                            <input type="email" className="w-full border border-black p-3 bg-white focus:outline-none focus:ring-1 focus:ring-black" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Contact</label>
                            <input type="text" className="w-full border border-black p-3 bg-white focus:outline-none focus:ring-1 focus:ring-black" placeholder="010-1234-5678" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Message</label>
                            <textarea className="w-full border border-black p-3 bg-white h-32 focus:outline-none focus:ring-1 focus:ring-black" placeholder="문의 내용을 입력해주세요."></textarea>
                        </div>
                        <button type="button" className="w-full bg-white border border-black text-black font-bold py-4 hover:bg-black hover:text-white transition-colors">
                            문의하기
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="w-full h-64 bg-gray-100 border border-black flex items-center justify-center image-placeholder">
                    <p className="font-bold text-gray-500">
                        [MAP PLACEHOLDER: Google Maps or Naver Map Integration]
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
