import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Overview', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Business', path: '/business' },
        { name: 'Track Record', path: '/track-record' },
        { name: 'News', path: '/news' },
        { name: 'IR Contact', path: '/contact' },
    ];

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-xl font-bold tracking-tighter text-black font-display border border-black px-2 py-1">
                            GROUND.K
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-sm font-medium text-black hover:underline underline-offset-4"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={scrollToFooter}
                            className="flex items-center space-x-1 text-sm font-bold border border-black px-4 py-2 bg-white text-black hover:bg-gray-100"
                        >
                            <span>Mobility Brands</span>
                            <ChevronDown size={14} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none border border-black p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-black py-4 px-6 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-lg font-medium text-black py-2 border-b border-gray-200 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={scrollToFooter}
                        className="text-left text-lg font-bold text-black py-2 flex items-center justify-between"
                    >
                        <span>Mobility Brands</span>
                        <ChevronDown size={16} />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
