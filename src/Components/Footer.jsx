import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Send,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const exploreLinks = [
    { name: "Home", slug: "/home" },
    { name: "Word of the Day", slug: "/word-day" },
    { name: "Slang", slug: "/slang" },
    { name: "Wordplay", slug: "/word" },
  ];

  const toolsLinks = [
    { name: "Rhymes", slug: "/rhymes" },
    { name: "Grammar", slug: "/grammar" },
    { name: "Word Finder", slug: "/word-finder" },
    { name: "More", slug: "/more" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0D2C42] to-[#02121f] text-white px-6 py-14 relative overflow-hidden shadow-inner">
      {/* Floating Glow Logo */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-400" size={20} />
            NANO
          </h2>
          <p className="text-gray-300 text-sm">
            Unleash your vocabulary with games, rhymes, slang, grammar tips, and
            more! Where learning meets fun.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-red-500 pb-1 mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="hover:text-red-400 transition-all"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Links */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-red-500 pb-1 mb-4">
            Tools
          </h3>
          <ul className="space-y-2 text-sm">
            {toolsLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="hover:text-red-400 transition-all"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-red-500 pb-1 mb-4">
            Stay in the Loop
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            Sign up to get weekly word fun, tips, and tricks!
          </p>
          <div className="flex items-center border border-gray-400 overflow-hidden bg-white">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 text-black rounded-l-full outline-none"
            />
            <button className="bg-red-600 px-4 py-2  hover:bg-red-700 transition flex items-center gap-1 text-white">
              <Send size={18} />
              <span className="text-sm">Send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Socials + Bottom */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-sm text-gray-400 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-red-400 transition-all">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-red-400 transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-red-400 transition-all">
            <Twitter size={20} />
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} WordyWorld · Built with 💡 & curiosity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
