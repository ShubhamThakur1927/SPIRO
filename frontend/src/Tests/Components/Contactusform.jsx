import React, { useState } from "react";
import Logosetter from "./Logosetter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Contactusform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({ email: "", phone: "" });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
    if (name === "phone") setErrors({ ...errors, phone: validatePhone(value) ? "" : "Invalid phone number" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !validatePhone(formData.phone)) {
      setErrors({
        email: validateEmail(formData.email) ? "" : "Invalid email format",
        phone: validatePhone(formData.phone) ? "" : "Invalid phone number",
      });
      return;
    }
    alert("Form submitted successfully!");
    console.log("Submitted Data:", formData);
    setFormData({ name: "", email: "", phone: "", role: "", message: "" });
    setErrors({ email: "", phone: "" });
  };

  return (
    <div
      className="bg-main w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10"
      style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/b8b0/76bd/2fc2aca743ce99d8f82a12ae2345cff4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hvo9r6V37Ek7uVAQVL8seNiVjQ40fnGAdcoUzam8LHxvWHQ34-1dKW4APgyrURaLBxAGUlM~oR~C5d8CwkmXUpmLzFdsLf0HxY0G8QYkEnHasKs5DHeDi5zAZw79t20S-vCHAG5rPjPuqQN564xcm1Y-TW87vizdXu5bzY17y31NaNg0Czav05BJ0Caqw29NyoMBSKPjx5sQOvw4F2bf5JUbaQmPB4mM1l3DHIcK4wwauyudBLbycZTo1XxAhhTw0cPSVxyGuCGNdZs2X2VbUqmInlpvQHJbNV9YQlyOP~14QiZL4BGc7kuCT0cBRDCrXHIuIDgCrOg0z0siEKzo3g__')" }}
    >
      
      <div className="flex flex-col-reverse md:flex-row bg-opacity-95 space-x-10 items-center max-w-screen-lg w-full bg-white p-6 md:p-10 shadow-lg rounded-lg">
        
        {/* Contact Info - Hidden on small screens */}
        <div className="w-full md:w-1/2 space-y-10 text-center md:text-left hidden md:block">
        <div>
        <Logosetter />
        </div>
          <p className="text-h3 text-gray-700">
            Have questions? Let's make learning seamless together! Reach out to SPIRO today!
          </p>
          <div className="space-y-3 text-tiny text-gray-700 flex flex-col">
            <p className="flex items-center"><MapPin className="mr-2" /> Mumbai</p>
            <p className="flex items-center"><Mail className="mr-2" /> spiroedu9@gmail.com</p>
            <p className="flex items-center"><Phone className="mr-2" /> +91 8452976481</p>
          </div>
          <div className="space-y-3 text-tiny text-gray-700 flex flex-col">
            <p className="flex items-center"><Facebook className="mr-2" /> @spiroedu</p>
            <p className="flex items-center"><Instagram className="mr-2" /> @spiroedu</p>
            <p className="flex items-center"><Linkedin className="mr-2" /> @spiroedu</p>
            <p className="flex items-center"><Twitter className="mr-2" /> @spiroedu</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-4 md:p-8 border-2 shadow-xl shadow-gray-300 rounded-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Name*</label>
              <input type="text" name="name" value={formData.name} placeholder="Full name" className="w-full p-3 border rounded-md" required onChange={handleChange} />
            </div>
            <div>
              <label className="block text-gray-700">Email*</label>
              <input type="email" name="email" value={formData.email} placeholder="Email" className="w-full p-3 border rounded-md" required onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Phone no.*</label>
              <input type="tel" name="phone" value={formData.phone} placeholder="+91" className="w-full p-3 border rounded-md" required onChange={handleChange} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-gray-700">What is your role?*</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="role" value="Teacher" checked={formData.role === "Teacher"} className="form-radio" required onChange={handleChange} />
                  <span>Teacher</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="role" value="Student" checked={formData.role === "Student"} className="form-radio" required onChange={handleChange} />
                  <span>Student</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Write your message</label>
              <textarea name="message" value={formData.message} className="w-full p-3 border rounded-md" placeholder="Write your message" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md">
              SUBMIT →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactusform;
