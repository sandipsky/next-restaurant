'use client';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-20 pt-[150px]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We are here to answer any questions you may have. Reach out to us and we will respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          {/* Contact Info */}
          <div className="md:w-1/3 p-4 md:p-0">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">We would love to hear from you. Whether you have a question or just want to say hi, feel free to drop us a message.</p>

            <div className="mt-8">
              <p className="text-gray-700 font-semibold">📍 Address:</p>
              <p className="text-gray-600">New Road</p>
              <p className="text-gray-600">Kathmandu, Nepal</p>

              <p className="mt-4 text-gray-700 font-semibold">📞 Phone:</p>
              <p className="text-gray-600">+977 99999999</p>

              <p className="mt-4 text-gray-700 font-semibold">✉️ Email:</p>
              <p className="text-gray-600">contact@yourcompany.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 w-full md:p-0 p-4 mt-12 md:mt-0">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="w-full py-3 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.717016622461!2d85.4267253154489!3d27.672137532588983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a94a4741f45%3A0x90cfd4b6a5c4e4c5!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1606415686453!5m2!1sen!2snp"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            title="Our location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
