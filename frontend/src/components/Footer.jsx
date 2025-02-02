import React from 'react';

function Footer() {
  return (
    <footer className="pb-10 w-full mt-28 px-6 md:px-20">
      
      {/* Upper Section */}
      <div className="Uppersection w-auto grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-0 pt-5">
        
        {/* Logo */}
        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:gap-8 md:gap-24 gap-10 text-small text-body-2">
          
          {/* Courses */}
          <div className="Courses">
            <h4 className="text-h4 font-semibold">Courses</h4>
            <ul className="flex flex-col gap-2 text-small text-body-2">
              <li>Artificial Intelligence</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          {/* Company */}
          <div className="Company">
            <h4 className="text-h4 font-semibold">Company</h4>
            <ul className="mt-3 text-small text-body-2">
              <li>About us</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="Resources">
            <h4 className="text-h4 font-semibold">Resources</h4>
            <ul className="mt-3 text-small text-body-2">
              <li>Blog</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Section */}
      <div className="mt-12 md:mt-24 text-center md:text-left border-t border-gray-300 pt-5">
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-tiny justify-center md:justify-start">
          <li>© Spiro All Rights Reserved.</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
