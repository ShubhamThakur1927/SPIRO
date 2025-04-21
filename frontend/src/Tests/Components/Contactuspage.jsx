import React, { useState } from "react";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", role: "", message: "" });
      } else {
        alert(`❌ Failed to send: ${data.message}`);
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("❌ Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Quarter Circle Background (Visible only on md and above) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary rounded-tr-full md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 gap-12">
        
        {/* Contact Info (Only visible on md and up) */}
        <div className="hidden md:block md:w-1/2 text-left space-y-6">
          <h1 className="text-primary text-4xl font-bold">SPIRO</h1>
          <p className="text-gray-700 text-lg font-medium">
            Have questions? <br />
            Let's make learning seamless together! <br />
            Reach out to SPIRO today!
          </p>
          <div className="text-sm py-8 space-y-3 text-white ">
            <p>📍 Mumbai</p>
            <p>✉️ spiroedu9@gmail.com</p>
            <p>📞 +91 8452976481</p>
          </div>
          <div className="pt-4 text-white text-sm space-y-1">
            <p>📘 @spiroedu</p>
            <p>📷 @spiroedu</p>
            <p>💼 @spiroedu</p>
            <p>🐦 @spiroedu</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/2 max-w-lg">
          {/* SPIRO logo for mobile only */}
          <div className="md:hidden mb-6 text-center">
            <h1 className="text-primary text-3xl font-bold">SPIRO</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
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
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
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
  className="..."
  placeholder="91+"
  required
  pattern="\d{10}"
  title="Phone number should be 10 digits only"
/>

            </div>
            <div>
              <label className="block text-gray-700 font-semibold">What is your role? *</label>
              <div className="flex gap-6 mt-2">
                {["Teacher", "Student"].map((role) => (
                  <label key={role} className="flex items-center gap-2 text-gray-700 font-medium">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    {role}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Write your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                placeholder="Write your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-opacity-90 transition text-white text-lg font-semibold py-3 rounded-lg shadow-sm hover:shadow-md"
            >
              SUBMIT →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactuspage;
