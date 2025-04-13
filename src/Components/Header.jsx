import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "./Images/logo.png";
import More from "./More";


const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Service", slug: "/service" },
    { name: "Product", slug: "/product" },
    { name: "ContactUs", slug: "/contact" },
    { name: "Assays", slug: "/assays" },
    { name: "Login", slug: "/login" },
  ];

  return (
    <header className="bg-[#0D2C42] text-white px-6 py-3 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-26 h-16 flex items-center justify-center">
            <img src={logo} alt="logo" className="h-full object-contain" />
          </div>
        </div>

        {/* Search bar (desktop only) */}
        <div className="hidden md:flex items-center w-full md:w-[450px] border border-gray-300 rounded overflow-hidden mx-4 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="identify"
            className="w-full px-2 py-1 text-white bg-transparent outline-none"
          />
          <button className="bg-red-600 px-3 py-2">
            <Search size={22} color="white" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-semibold">
          <ul className="flex ml-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black"
                >
                  {item.name}
                </button>

              </li>
            ))}
            
            <More />
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="w-full mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    navigate(item.slug);
                    setMobileMenuOpen(false); // close menu after click
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100 hover:text-black rounded"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <More />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
