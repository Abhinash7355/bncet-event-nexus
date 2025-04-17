
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-bncet-blue">BNCET</span>
              <span className="ml-2">Events Hub</span>
            </h3>
            <p className="text-gray-300 mb-4">
              B.N. College of Engineering and Technology, connecting students through
              engaging events and activities.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-bncet-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-bncet-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-bncet-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bncet-blue">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-bncet-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-bncet-blue transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-bncet-blue transition-colors">Gallery</Link>
              </li>
              <li>
                <a href="https://bncet.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-bncet-blue transition-colors">
                  College Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bncet-blue">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-bncet-blue" />
                <span>
                  Sitapur Road, Lucknow,
                  <br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-bncet-blue" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-bncet-blue" />
                <span>info@bncet.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bncet-blue">Our Motto</h3>
            <div className="p-4 bg-gray-800 rounded-lg text-center">
              <p className="text-xl font-medium italic text-white mb-2">
                "Celebrate. Connect. Create."
              </p>
              <p className="text-gray-400 text-sm">
                Building tomorrow's leaders through today's experiences
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} BNCET Events Hub. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Created with Lovable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
