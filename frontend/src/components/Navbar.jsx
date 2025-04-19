import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuthstore } from "../Stores/authstores";

function Navbar({ className, textColor = "text-white" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, checkAuth } = useAuthstore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const Auth = async () => {
      await checkAuth();
    };

    Auth();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkAuth]);
  return (
    <nav
      className={`fixed w-full top-0 z-50 font-semibold ${
        isScrolled ? "bg-white text-black" : textColor
      } ${className}`}
    >
      <div
        className={`w-full flex md:justify-around justify-between items-center px-5 py-2 pt-3 md:px-10 lg:px-16`}
      >
        {/* Logo */}
        <div className="text-h1 font-semibold leading-h1 text-primary">
          <Link to="/" className="flex gap-2 items-center">
            {" "}
            <img src={logo} alt="Logo" /> SPIRO
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-small">
          {/* <Link to="*">
            <li className="hover:text-primary transition">Docs</li>
          </Link> */}
          <Link to="/">
            <li className="hover:text-primary transition">Home</li>
          </Link>
          <Link to="/about-us">
            <li className="hover:text-primary transition">About</li>
          </Link>
          <Link to="/contact-us">
            <li className="hover:text-primary transition">Contact Us</li>
          </Link>
        </ul>

        {/* Desktop Buttons */}
          {/* {user ? (
          <div className="hidden md:flex gap-7 relative">
            <Link to="/Login">
              <img
                src={user?.ProfilePicUrl}
                alt="Profile"
                className="w-10 h-10 border-2 border-red rounded-full"
                onMouseEnter={(e) => {
                  const tooltip = document.createElement("div");
                  tooltip.textContent = "Dashboard";
                  tooltip.className =
                    "absolute top-12 left-0 bg-black text-white text-xs rounded px-2 py-1";
                  e.target.parentNode.appendChild(tooltip);
                }}
                onMouseLeave={(e) => {
                  const tooltip = e.target.parentNode.querySelector("div");
                  if (tooltip) tooltip.remove();
                }}
              />
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-7">
            <Link to="/signup">
              <span className="text-small">Signup</span>
            </Link>
            <Link to="/login">
              <span className="bg-primary py-3 text-small px-8 text-center rounded-xl font-semibold text-white hover:bg-opacity-80 transition">
                Login
              </span>
            </Link>
          </div>
        )} */}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-black bg-white shadow-lg rounded-b-lg p-4 absolute top-16 w-full">
          <ul className="flex flex-col items-center space-y-4 text-small">
            {/* <Link to="*" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-primary transition">Docs</li>
            </Link> */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-primary transition">Home</li>
            </Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-primary transition">About</li>
            </Link>
            <Link to="*" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-primary transition">Contact Us</li>
            </Link>
          </ul>
          {/* <div className="mt-4 flex flex-col items-center space-y-8">
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <span className="text-small">Signup</span>
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <span className="bg-primary py-3 text-small px-8 text-center rounded-xl font-semibold text-white hover:bg-opacity-80 transition">
                Login
              </span>
            </Link>
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
