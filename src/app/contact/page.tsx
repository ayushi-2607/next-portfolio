
"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Socials from '../components/ui/Socials';
import { easeIn, motion } from 'framer-motion';
import {serviceId,templateId,userId} from '../../constants/data/emailJsConfig';
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus('sending');
        console.log("Form DATA", formData);
        try {
            await emailjs.send(serviceId, templateId, formData, userId);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus('sent');
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
        }
    };

    return (
        <div className=" text-white py-16 px-8">
            <motion.div

                animate={{ boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-600 p-6 rounded-lg">
                <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="text"
                                name="subject"
                                placeholder="Your Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="w-full p-3 bg-yellow-500 text-gray-900 font-bold text-xl rounded-lg hover:bg-yellow-400 transition duration-300"
                            type="submit"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'sent' && <p className="text-green-500 mt-4">Message Sent! Will get back to you shortly.</p>}
                        {status === 'error' && <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>}
                    </form>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-500 mb-6">Contact Info</h2>
                    <p className="mb-6">
                        Hi there! Feel free to reach out me via email and socials.<br /> Details as follows:
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p>lonkarayushi@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p>+91 9109044554</p>

                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p>Indore, India</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Visit my social profile and get connected</h3>
                        <div className="flex space-x-4 mt-4">
                            <Socials />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
