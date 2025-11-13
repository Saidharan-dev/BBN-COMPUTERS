import React from 'react';

const ContactSection = () => {
    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input className="border rounded w-full py-2 px-3" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input className="border rounded w-full py-2 px-3" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
            </form>
            <div className="mt-8">
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p>BBN Computers</p>
                <p>123 Tech Lane</p>
                <p>Tech City, TC 12345</p>
                <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
                <p>Email: info@bbncomputers.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default ContactSection;