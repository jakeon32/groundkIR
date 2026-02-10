import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-white border-t border-black py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
                        <h2 className="text-xl font-bold font-display text-black mb-4">GROUND.K</h2>
                        <p className="text-sm text-gray-600 leading-relaxed font-mono">
                            B2B Mobility Platform<br />
                            Digital Transformation Partner
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-6 border-b border-black pb-2 inline-block">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-700 font-mono">
                            <li>
                                <a href="mailto:ir@groundk.co.kr" className="hover:text-black hover:underline">
                                    ir@groundk.co.kr
                                </a>
                            </li>
                            <li>02-863-3540</li>
                            <li className="text-gray-500 text-xs mt-2">
                                Seoul (Magok) / Busan (Centum) / Singapore
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: SITEMAP */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-6 border-b border-black pb-2 inline-block">Sitemap</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/business" className="hover:underline">Business Portfolio</a></li>
                            <li><a href="/track-record" className="hover:underline">Track Record</a></li>
                            <li><a href="/news" className="hover:underline">News</a></li>
                            <li><a href="/contact" className="hover:underline">IR Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Mobility Brands */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-6 border-b border-black pb-2 inline-block">Family Sites</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="http://groundk.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 border border-gray-300 hover:border-black transition-colors">
                                    <span className="text-sm font-bold text-black">GroundK Global</span>
                                    <ArrowUpRight size={14} className="text-black" />
                                </a>
                            </li>
                            <li>
                                <a href="http://triseup.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 border border-gray-300 hover:border-black transition-colors">
                                    <span className="text-sm font-bold text-black">T-RiseUp</span>
                                    <ArrowUpRight size={14} className="text-black" />
                                </a>
                            </li>
                            <li>
                                <a href="http://rideus.co.kr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 border border-gray-300 hover:border-black transition-colors">
                                    <span className="text-sm font-bold text-black">RIDEUS</span>
                                    <ArrowUpRight size={14} className="text-black" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
                    <p>&copy; {new Date().getFullYear()} GroundK Inc.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>CEO: Dongwon Jang</span>
                        <span>Business License: 238-81-00429</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
