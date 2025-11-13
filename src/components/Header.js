import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">BBN Computers</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-gray-400">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;