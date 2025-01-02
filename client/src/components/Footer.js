"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const Footer = () => {
    return (<footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Cook4You delivers fresh and delicious meals right to your door.
            Explore a wide variety of cuisines and enjoy seamless food ordering.
          </p>
        </div>
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/menu" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="">
          <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://facebook.com" className="hover:scale-110 transition" aria-label="Facebook">
              <fa_1.FaFacebook className="w-6 h-6 text-green-500 hover:text-green-700"/>
            </a>
            <a href="https://twitter.com" className="hover:scale-110 transition" aria-label="Twitter">
              <fa_1.FaTwitter className="w-6 h-6 text-green-500 hover:text-green-700"/>
            </a>
            <a href="https://instagram.com" className="hover:scale-110 transition" aria-label="Instagram">
              <fa_1.FaInstagram className="w-6 h-6 text-green-500 hover:text-green-700"/>
            </a>
            <a href="https://instagram.com" className="hover:scale-110 transition" aria-label="Instagram">
              <fa_1.FaWhatsapp className="w-6 h-6 text-green-500 hover:text-green-700"/>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Cook4You. All rights reserved.
        </p>
      </div>
    </footer>);
};
exports.default = Footer;
