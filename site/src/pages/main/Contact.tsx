import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/sections/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <Helmet>
                <title>Contact - GroundK</title>
                <meta name="description" content="그라운드케이에 영업, 제휴, 채용 등 문의를 남겨주세요." />
            </Helmet>
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    Contact
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Sales, Partnership &amp; General Inquiries
                </p>
            </div>

            <ContactForm />
        </div>
    );
};

export default Contact;
