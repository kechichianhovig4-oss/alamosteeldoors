import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    doorType: '',
    message: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      {/* Add Material Icons and Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <div className="font-display bg-white dark:bg-gray-900 text-gray-800 dark:text-white antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-6">
            <nav className="flex justify-between items-center">
              <a className="flex items-center gap-2 text-xl font-bold" href="#">
                <span className="material-symbols-outlined text-blue-500 text-3xl">door_front</span>
                <span>CustomDoors</span>
              </a>
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <a className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors" href="#">About Us</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors" href="#">FAQ</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors" href="#">Our Work</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors" href="#">Our Products</a>
              </div>
              <a className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity" href="#">Contact Us</a>
            </nav>
          </header>

          {/* Main Content */}
          <main className="py-16 sm:py-24">
            {/* Hero Section */}
            <section className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Reach Out, We'll Help You</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Our team is ready to assist you with custom door solutions tailored to your needs
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-symbols-outlined text-blue-500">call</span>
                  Call Us Now
                </button>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-symbols-outlined text-blue-500">email</span>
                  Email Us
                </button>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold">Contact Us For Custom Door</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="first-name">
                      First Name
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="last-name">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xl pointer-events-none">
                      mail
                    </span>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="phone-number">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xl pointer-events-none">
                      call
                    </span>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                      id="phone-number"
                      name="phoneNumber"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Door Type Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="door-type">
                    Door Type
                  </label>
                  <select
                    className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                    id="door-type"
                    name="doorType"
                    value={formData.doorType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a door type</option>
                    <option value="Interior">Interior</option>
                    <option value="Exterior">Exterior</option>
                    <option value="French">French</option>
                    <option value="Sliding">Sliding</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your custom door requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-blue-500 focus:ring-blue-500"
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={handleChange}
                    required
                  />
                  <label className="ml-3 block text-sm text-gray-500 dark:text-gray-400" htmlFor="agreement">
                    I agree to receive communications about my custom door inquiry and understand that my information will be handled according to the privacy policy.
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </div>
              </form>
            </section>
          </main>
        </div>

        {/* Footer Section */}
        <footer className="dark:bg-[#1A1A2E] bg-gray-800 text-white pt-16 sm:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-lg border border-blue-500 bg-black bg-opacity-20 flex flex-col items-start">
                <div className="bg-blue-600/20 text-blue-400 p-3 rounded-lg mb-4">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Custom Door Street<br/>Design District<br/>New York, NY 10001</p>
              </div>
              <div className="p-6 rounded-lg border border-purple-500 bg-black bg-opacity-20 flex flex-col items-start">
                <div className="bg-purple-600/20 text-purple-400 p-3 rounded-lg mb-4">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 8AM - 6PM<br/>Saturday: 9AM - 4PM<br/>Sunday: Closed</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500 bg-black bg-opacity-20 flex flex-col items-start">
                <div className="bg-green-600/20 text-green-400 p-3 rounded-lg mb-4">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-400">24/7 Customer Support<br/>support@customdoors.com<br/>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16">
              <div>
                <a className="flex items-center gap-2 text-xl font-bold mb-4" href="#">
                  <span className="material-symbols-outlined text-blue-500 text-3xl">door_front</span>
                  <span>CustomDoors</span>
                </a>
                <p className="text-gray-400 text-sm">Crafting exceptional custom doors for over 20 years. Quality, design, and service you can trust.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a className="text-gray-400 hover:text-blue-500 transition-colors" href="#">About Us</a></li>
                  <li><a className="text-gray-400 hover:text-blue-500 transition-colors" href="#">FAQ</a></li>
                  <li><a className="text-gray-400 hover:text-blue-500 transition-colors" href="#">Our Work</a></li>
                  <li><a className="text-gray-400 hover:text-blue-500 transition-colors" href="#">Our Products</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="material-symbols-outlined text-sm">email</span>
                    <span>info@customdoors.com</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>New York, NY</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a className="bg-gray-700 p-2 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white transition-colors" href="#">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                  </a>
                  <a className="bg-gray-700 p-2 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white transition-colors" href="#">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fillRule="evenodd"></path></svg>
                  </a>
                  <a className="bg-gray-700 p-2 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white transition-colors" href="#">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a className="bg-gray-700 p-2 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white transition-colors" href="#">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.34C4.486 1 3 2.486 3 4.332v15.336C3 21.514 4.486 23 6.34 23h11.328c1.854 0 3.332-1.486 3.332-3.332V4.332C21 2.486 19.522 1 17.668 1z" fillRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-600 py-6 text-center text-sm text-gray-400">
              <p>© 2024 CustomDoors. All rights reserved. | <a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a> | <a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a></p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 1,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
        }
      `}</style>
    </>
  );
}

export default ContactUs;