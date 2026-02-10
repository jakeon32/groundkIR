import React from 'react';

const teamMembers = [
    {
        name: '장동원',
        role: 'CEO',
        desc: '국제행사 차량 운수업 15년\n디지털 전환 설계자'
    },
    {
        name: 'CTO',
        role: 'Tech Lead',
        desc: '모빌리티 SaaS 설계\n클라우드 아키텍처 전문가'
    },
    {
        name: 'COO',
        role: 'Operation Lead',
        desc: 'MICE·의전 현장 총괄\n오퍼레이션 10년 경력'
    }
];

const AboutTeamInfo: React.FC = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Team Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold font-display text-black mb-12 text-center">Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="border border-black p-6 text-center hover:bg-gray-50 transition-colors">
                                <div className="w-24 h-24 bg-gray-200 mx-auto mb-6 border border-black flex items-center justify-center font-mono text-xs">
                                    사진
                                </div>
                                <h3 className="text-xl font-bold text-black font-display">{member.name}</h3>
                                <p className="text-sm font-bold text-gray-500 mb-4 font-mono">{member.role}</p>
                                <p className="text-gray-700 whitespace-pre-line text-sm">
                                    {member.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Info Table */}
                <div>
                    <h2 className="text-3xl font-bold font-display text-black mb-12 text-center">Company Info</h2>
                    <div className="max-w-3xl mx-auto border-t border-black">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 font-bold text-black w-1/3 pl-4">Company Name</th>
                                    <td className="py-4 text-gray-700">(주)그라운드케이</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 font-bold text-black pl-4">CEO</th>
                                    <td className="py-4 text-gray-700">장동원</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 font-bold text-black pl-4">Established</th>
                                    <td className="py-4 text-gray-700">2016. 06. 01</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 font-bold text-black pl-4">Locations</th>
                                    <td className="py-4 text-gray-700">
                                        Seoul (HQ), Busan, Singapore
                                    </td>
                                </tr>
                                <tr className="border-b border-black">
                                    <th className="py-4 font-bold text-black pl-4">Certifications</th>
                                    <td className="py-4 text-gray-700">
                                        Venture Company, Main-Biz, Tech Rating T-4
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeamInfo;
