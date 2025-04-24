
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-dark text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">
              LinguaLab
            </h3>
            <p className="text-gray-300 text-sm">
              Master new languages step-by-step with our interactive lessons, 
              practice exercises, and cultural insights.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-purple-300">Languages</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="#" className="hover:text-purple-300 transition">English</Link></li>
              <li><Link to="#" className="hover:text-purple-300 transition">Hindi</Link></li>
              <li><Link to="#" className="hover:text-purple-300 transition">Gujarati</Link></li>
              <li><Link to="#" className="hover:text-purple-300 transition">Marathi</Link></li>
              <li><Link to="#" className="hover:text-purple-300 transition">Spanish</Link></li>
              <li><Link to="#" className="hover:text-purple-300 transition">French</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-blue-300">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="#" className="hover:text-blue-300 transition">Dictionary</Link></li>
              <li><Link to="#" className="hover:text-blue-300 transition">Pronunciation Guide</Link></li>
              <li><Link to="#" className="hover:text-blue-300 transition">Grammar Tips</Link></li>
              <li><Link to="#" className="hover:text-blue-300 transition">Cultural Notes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-blue-300">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-300 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-300 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} LinguaLab by Vishesh Sanghvi. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/vishesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-300 transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/vishesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-300 transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/vishesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
