import React from 'react';
import Navbar from '../../components/Navbar';

function Termsandcondition() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-28 px-4 md:px-10">
        <div className="max-w-screen-lg mx-auto bg-white p-6 md:p-10 shadow-lg rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-4">Terms and Conditions</h2>
          <img
            src="https://s3-alpha-sig.figma.com/img/3e96/9e67/5fee9b130fef9c7efbd9f5287f3339da?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FtG5lZUMjttDmpdk3-DMu4O3LH3GsgymU1reroYUDb65x4w23cXP0TTrS6RBEukKf7hkcP6iBaXP1tNZHwAghH47S~~Zymc7qnOT~o1cw1JwVBZTiblMmdPM2DU~EVE66ceqrnuU4dZgPo6nTKu45q4fFxF8EMv7VUrKEWEkVZkinGFn6bGIOueFHSupvXNYHpKQ6xRHeRXmCPtUWMLWJ2VNz3QtZc2VdGfgaSX~HWVNo8WuAk6zQMndG4Yix5b3Ky8R12L1ZUyDNU8NN~WIEURDjkI6II0WxQKB7GH2YPft~cc1hY0mX2WkJ5tG8EyTstJuKbpSVvtcKGbw5ReSag__"
            alt="Handshake"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-gray-700 text-sm">
            Welcome to SPIRO! By accessing or using our platform, you agree to comply with and be bound by
            these Terms and Conditions. If you do not agree, you may not use our services. "Platform" refers
            to SPIRO's website and any associated applications or services, while "User" refers to any
            individual or entity accessing or using SPIRO's services.
          </p>
          <p className="text-gray-700 text-sm mt-4">
            To use SPIRO, you must be at least <span className="text-blue-600 font-semibold">18 years old</span> or have parental or
            guardian consent. You agree to use SPIRO solely for educational purposes and must not engage in
            any illegal, fraudulent, or harmful activities.
          </p>
          <p className="text-gray-700 text-sm mt-4">
            Unauthorized use of SPIRO's content, including games, simulations, and the <span className="text-red-600 font-semibold">AI
            chatbot</span>, is strictly prohibited. Reproduction, distribution, or modification of this content
            without explicit permission is not allowed.
          </p>
          <p className="text-gray-700 text-sm mt-4">
            You are responsible for <span className="text-blue-600 font-semibold">maintaining the confidentiality</span> of your account
            credentials and are solely responsible for all activities conducted through your account.
          </p>
          <p className="text-gray-700 text-sm mt-4">
            SPIRO is not responsible for any direct, indirect, or incidental damages arising from the use of its
            services.
          </p>
        </div>

        {/* Description Section */}
        <div className="max-w-screen-lg mx-auto mt-10 p-6 md:p-10 bg-gray-100 shadow-lg rounded-2xl border border-gray-300 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">Description of Services</h2>
            <p className="text-gray-700 text-sm">
              By using SPIRO, you agree to these Terms and Conditions, which govern access to our platform,
              including the website and associated services. Users must be at least 18 years old or have parental
              consent and ensure the accuracy of their registration details.
            </p>
            <p className="text-gray-700 text-sm mt-4">
              The platform is intended solely for educational purposes, and any misuse, including unauthorized use
              of content such as games, simulations, or the AI chatbot, is strictly forbidden.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-sm mt-4 md:mt-0">
              All materials on SPIRO are protected intellectual property and cannot be copied, shared, or altered
              without prior permission. Users are accountable for safeguarding their account credentials and all
              activities under their accounts.
            </p>
            <p className="text-gray-700 text-sm mt-4">
              SPIRO is not liable for any direct or indirect damages arising from platform use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Termsandcondition;
