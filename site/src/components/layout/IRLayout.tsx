import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import IRSubNav from './IRSubNav';
import Footer from './Footer';

const IRLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-black bg-white">
            <Navbar />
            <IRSubNav />
            <main className="flex-grow pt-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default IRLayout;
