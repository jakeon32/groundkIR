
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/sections/ContactForm';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            <Helmet>
                <title>IR Contact - GroundK</title>
                <meta name="description" content="그라운드케이 IR 담당자에게 문의하거나 회사소개서(IR Deck)를 다운로드하세요." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR Contact
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Get in touch with our IR team
                </p>
            </div>

            <ContactForm />
        </div>
    );
};

export default Contact;
