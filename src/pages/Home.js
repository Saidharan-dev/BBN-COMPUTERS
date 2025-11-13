import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import PageLayout from '../components/PageLayout';

const services = [
	{
		title: 'Tech Support',
		icon: '💻',
		desc: 'Onsite & remote support for all your devices.',
	},
	{
		title: 'Cybersecurity',
		icon: '🛡️',
		desc: 'Protect your business with advanced security solutions.',
	},
	{
		title: 'Network Setup',
		icon: '🌐',
		desc: 'Fast, reliable network installation & monitoring.',
	},
	{
		title: 'System Maintenance',
		icon: '🔧',
		desc: 'Keep your systems running smoothly and up-to-date.',
	},
];

const testimonials = [
	{
		name: 'Amit S.',
		text: 'BBN Computers saved our business from a major cyber attack. Highly recommended!',
	},
	{
		name: 'Priya R.',
		text: 'Fast, friendly tech support. They fixed our network in no time.',
	},
];

const Home = () => {
	return (
		<PageLayout>
			<div className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 min-h-screen text-white">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-center justify-center py-20"
				>
					<h1 className="text-5xl font-extrabold mb-4 tracking-tight text-blue-300 drop-shadow-lg">
						BBN Computers
					</h1>
					<p className="text-xl mb-6 text-blue-100">
						Your Trusted IT & Cybersecurity Partner
					</p>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="/contact"
						className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold shadow-lg"
					>
						Get Support Now
					</motion.a>
				</motion.div>

				{/* Company Intro */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<h2 className="text-2xl font-bold mb-2 text-blue-200">About Us</h2>
					<p className="text-lg text-gray-200">
						BBN Computers delivers expert IT solutions for businesses and
						individuals. From cybersecurity to tech support, our experienced team
						keeps your technology running smoothly and securely.
					</p>
				</motion.div>

				{/* Services */}
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 px-4">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							whileHover={{
								scale: 1.05,
								boxShadow: '0 8px 32px #2563eb55',
							}}
							className="bg-gray-800 rounded-xl p-6 flex flex-col items-center transition shadow-lg"
						>
							<span className="text-4xl mb-3">{service.icon}</span>
							<h3 className="font-bold text-lg mb-2 text-blue-300">
								{service.title}
							</h3>
							<p className="text-gray-300 text-center">{service.desc}</p>
						</motion.div>
					))}
				</div>

				{/* Testimonials */}
				<div className="bg-blue-950 py-10">
					<h2 className="text-2xl font-bold text-center mb-6 text-blue-200">
						What Our Clients Say
					</h2>
					<div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
						{testimonials.map((t, idx) => (
							<motion.div
								key={t.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: idx * 0.2 }}
								className="bg-gray-900 rounded-lg p-6 shadow-lg flex-1"
							>
								<p className="italic text-gray-200 mb-3">"{t.text}"</p>
								<span className="font-semibold text-blue-400">{t.name}</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Home;