import React from 'react';

const ServicesSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Tech Support</h3>
                        <p className="text-gray-700">24/7 technical support to help you with any issues you may encounter.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                        <p className="text-gray-700">Protecting your data and systems from cyber threats with our advanced solutions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">System Maintenance</h3>
                        <p className="text-gray-700">Regular maintenance services to ensure your systems run smoothly and efficiently.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;