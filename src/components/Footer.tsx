import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">Daffa Portfolio</h2>
          <p className="text-gray-400 mt-2">Crafting digital experiences with code & creativity.</p>
        </div>
        
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold">General</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#project" className="hover:text-white">Project</a></li>
            <li><a href="#service" className="hover:text-white">About Me</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com/in/daffakhairyalmayrizq" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="https://instagram.com/daffakhairyal" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="https://github.com/daffakhairyal" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Daffa Portfolio. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}