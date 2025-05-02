import React from 'react'
import { FaLinkedin, FaInstagram, FaYoutube, FaFileDownload, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent!');
      };

  return (
    <div className="max-w-4xl mt-9 mx-auto px-4 py-12">
      
      <h1 className="text-3xl font-bold text-indigo-500 mb-5">Get In Touch</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3 text-xl" />
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-500 transition">
                email@email.com
              </a>
            </div>
            
            <div className="flex items-center">
              <FaPhone className="text-blue-500 mr-3 text-xl" />
              <span className="text-gray-600">+1 (123) 456-7890</span>
            </div>
            
          </div>
          
          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://instagram.com/yourfootball" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact