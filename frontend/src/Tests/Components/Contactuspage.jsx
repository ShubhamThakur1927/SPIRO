import React, { useState } from 'react';

const Contactuspage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", role: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-12"
      style={{ backgroundImage: `url('/images/contact-bg.jpg')` }} // Change the path accordingly
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          SPIRO
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Have questions? Let's make learning seamless together!
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Reach out to SPIRO today!
          </p>
          <div className="mt-6 space-y-3 text-gray-700">
            <p>📍 <span className="font-medium">Mumbai</span></p>
            <p>✉️ <span className="font-medium">spiroedu9@gmail.com</span></p>
            <p>📞 <span className="font-medium">+91 8452976481</span></p>
          </div>
          <div className="mt-6 space-y-3 text-gray-700">
            <p>📘 @spiroedu</p>
            <p>📷 @spiroedu</p>
            <p>💼 @spiroedu</p>
            <p>🐦 @spiroedu</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-blue-600 text-center md:hidden">SPIRO</h2>
          <form className="space-y-5 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Phone no.*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What is your role?*</label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2 text-gray-700 font-medium">
                  <input
                    type="radio"
                    name="role"
                    value="Teacher"
                    checked={formData.role === "Teacher"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <span>Teacher</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700 font-medium">
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={formData.role === "Student"}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <span>Student</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Write your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
              SUBMIT →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactuspage;
