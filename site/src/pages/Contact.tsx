import React, { useEffect } from 'react';
import ContactForm from '../components/sections/ContactForm';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white pt-20">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-black text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-black mb-4">
                    IR Contact
                </h1>
                <p className="text-lg text-gray-600 font-mono">
                    Connect with GroundK
                </p>
            </div>

            <ContactForm />
        </div>
    );
};

export default Contact;
