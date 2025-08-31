"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState("idle");
  const [openFaq, setOpenFaq] = useState(-1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // FormSubmit.co
      await fetch("https://formsubmit.co/ajax/ovikbiswas01@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Internal API route (App Router)
      await fetch("/api/saveToSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 12 hours in any day. For urgent matters, please use our direct email for faster response."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your project requirements, timeline, budget range, and any specific questions you have. The more details you provide, the better we can assist you."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free initial consultation to discuss your project needs and how we can help bring your vision to life."
    },
    {
      question: "What types of projects do you work on?",
      answer: "We work on a wide range of projects including web development, mobile apps, UI/UX design, and digital marketing solutions."
    },
    {
      question: "Can I schedule a call instead of sending a message?",
      answer: "Absolutely! You can request a call in your message, and we'll coordinate a time that works for both of us."
    }
  ];

  const contactMethods = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
      title: "Email",
      value: "ovikbiswas01@gmail.com",
      description: "Send us a detailed message"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      title: "Response Time",
      value: "Within 12 hours",
      description: "We'll get back to you quickly"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
      title: "Live Chat",
      value: "Available 9 AM - 6 PM",
      description: "Chat with our team directly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Header */}
      <header className="relative w-full flex flex-col items-center justify-center gap-6 h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-4.jpg)' }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-main/70 via-sec/60 to-main/70" /> */}
        
        

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl font-light max-w-2xl leading-relaxed">
            {`Ready to start your next project? Let's discuss how we can bring your vision to life with cutting-edge solutions.`}
          </p>
        
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Send us a message
              </h2>
              <p className="text-gray-300">{`Fill out the form below and we'll get back to you soon`}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full p-4 rounded-2xl border-2 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-main focus:ring-4 focus:ring-main/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full p-4 rounded-2xl border-2 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-main focus:ring-4 focus:ring-main/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full p-4 rounded-2xl border-2 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-main focus:ring-4 focus:ring-main/20 transition-all duration-300"
              />
              
              <textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full p-4 rounded-2xl border-2 border-gray-600 bg-gray-700 text-white placeholder-gray-400 h-40 focus:border-main focus:ring-4 focus:ring-main/20 transition-all duration-300 resize-none"
              />
              
              <button
                type="submit"
                className={`w-full p-4 cursor-pointer rounded-2xl bg-main text-white font-bold transition-all duration-300 transform hover:bg-main/80 flex items-center justify-center gap-2 ${
                  status === "loading" 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-gradient-to-r from-main to-sec hover:shadow-2xl hover:shadow-main/25"
                }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                  </>
                )}
              </button>
            </form>

            {status === "success" && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                <div className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  Message sent successfully!
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                <div className="text-red-700 font-semibold text-center">Failed to send message. Try again!</div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-main to-sec bg-clip-text text-transparent">
                Alternative Ways to Contact
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-700 hover:bg-gray-600 transition-all duration-300">
                    <div className="bg-gradient-to-r from-main to-sec p-3 rounded-xl text-white">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{method.title}</h4>
                      <p className="text-lg font-semibold text-main">{method.value}</p>
                      <p className="text-sm text-gray-300">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-main to-sec rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Quick 12-hour response time</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert team ready to help</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Tailored solutions for your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-main to-sec bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-600 rounded-2xl overflow-hidden">
                <button
                  className="w-full p-6 cursor-pointer text-left bg-gray-700 hover:bg-gray-600 transition-all duration-300 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <svg className={`w-5 h-5 text-main transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7"/>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-gray-800 border-t border-gray-600">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}