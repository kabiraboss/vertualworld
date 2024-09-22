import { Menu, X } from "lucide-react";
import { useState } from "react";
import vr from "../assets/vr.png" ;

import  "./navbar.css";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={vr} alt="vr" />
            <span className="text-xl tracking-tight"><span>Virtual</span><span className="bg-gradient-to-r from-orange-300 to-red-800 text-transparent bg-clip-text">World</span></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
          <li><a href="#hero">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#workflow">Workflow</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
  href="#"
  className="bg-gradient-to-r from-pink-600 to-blue-700 py-2 px-3 rounded-md hover:from-blue-500 hover:to-pink-600"
>
  Register
</a>

          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            <li ><a href="#hero">Home</a></li>
              <li ><a href="#feature">Features</a></li>
              <li ><a href="#workflow">Workflow</a></li>
              <li ><a href="#pricing">Pricing</a></li>
              <li ><a href="#testimonials">Testimonials</a></li>
              
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a 
                href="#"
                className = "btn">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;