import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white text-darkGray px-6 py-12">
      {/* Background blobs */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Features */}
        <div>
          <h3 className="text-darkGray font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lightTaupe">Task Management</a></li>
            <li><a href="#" className="hover:text-lightTaupe">Calendar</a></li>
            <li><a href="#" className="hover:text-lightTaupe">Reminders</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-darkGray font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lightTaupe">Company</a></li>
            <li><a href="#" className="hover:text-lightTaupe">Careers</a></li>
            <li><a href="#" className="hover:text-lightTaupe">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-darkGray font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lightTaupe">Help Center</a></li>
            <li><a href="#" className="hover:text-lightTaupe">FAQ</a></li>
            <li><a href="#" className="hover:text-lightTaupe">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-darkGray font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-lightTaupe text-xl">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-lightTaupe text-xl">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-lightTaupe text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-lightTaupe text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
