import React from 'react'

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
    <div>
        <div>
            <h1 className='text-h1 text-primary font-semibold'>
                SPIRO
            </h1>
        </div>
      <div className=''>
      <div>
      <div className="bg-white shadow-lg p-10 rounded-lg w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 p-8">
          
          <p className="mt-4 text-gray-700 text-lg">
            Have questions? Let's make learning seamless together! Reach out to SPIRO today!
          </p>
          <div className="mt-6 space-y-3 text-gray-700">
            <p>📍 Mumbai</p>
            <p>✉️ spiroedu9@gmail.com</p>
            <p>📞 91+ 8452976481</p>
          </div>
          <div className="mt-6 flex flex-col space-y-3">
            <p className="flex items-center space-x-2"><span>📘</span> @spiroedu</p>
            <p className="flex items-center space-x-2"><span>📷</span> @spiroedu</p>
            <p className="flex items-center space-x-2"><span>💼</span> @spiroedu</p>
            <p className="flex items-center space-x-2"><span>🐦</span> @spiroedu</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/3 "></div>
      </div>
        </div>
        <div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-blue-600 md:hidden">SPIRO</h1>
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
                placeholder="91+"
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
    </div>
  )
}

export default Contactuspage
