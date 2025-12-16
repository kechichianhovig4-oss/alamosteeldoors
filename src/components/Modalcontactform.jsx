// components/ModalContactForm.jsx
import React, { useState } from 'react';

const ModalContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Single Steel Door',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#326747] bg-[#1c3024] shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 size-8 rounded-full bg-[#112218] border border-[#326747] text-gray-300 hover:text-primary transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Get Your Free Quote</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Fill out the form below and our design specialists will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone & Project Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-full bg-[#112218] border border-[#326747] text-white px-5 py-3 pr-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
                >
                  <option>Single Steel Door</option>
                  <option>Double Steel Door</option>
                  <option>Pivot Door</option>
                  <option>French Door</option>
                  <option>Custom Railing/Gate</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message Details */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full rounded-2xl bg-[#112218] border border-[#326747] text-white px-5 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project, dimensions, or style preferences..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary h-12 text-[#112218] text-base font-bold tracking-[0.015em] transition-all hover:bg-green-400 hover:shadow-[0_0_25px_rgba(43,238,121,0.6)]"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="material-symbols-outlined ml-2 relative z-10 transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </form>

          {/* Contact info footer */}
          <div className="mt-6 pt-6 border-t border-[#326747]">
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>sales@alamosteeldoors.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContactForm;