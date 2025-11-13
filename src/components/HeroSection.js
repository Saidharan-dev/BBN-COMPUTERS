import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
            <h1 className="text-5xl font-bold mb-4">BBN Computers</h1>
            <p className="text-xl mb-6">Your trusted partner in technology solutions.</p>
            <a href="#services" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Get Started
            </a>
        </div>
    );
};

export default HeroSection;