import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">Contact us: info@bbncomputers.com | (123) 456-7890</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
                </div>
                <p className="mt-4">&copy; {new Date().getFullYear()} BBN Computers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;