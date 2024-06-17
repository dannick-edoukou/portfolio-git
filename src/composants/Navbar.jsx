
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-indigo-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-mono font-bold">R3VCT.</div>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:ring-blue-500 p-1">
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex space-x-4 text-white">
                    <a href="#" className="hover:underline">Accueil</a>
                    <a href="#" className="hover:underline">À propos</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2">Accueil</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2">À propos</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2">Services</a>
                <a href="#contact" className="block px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
