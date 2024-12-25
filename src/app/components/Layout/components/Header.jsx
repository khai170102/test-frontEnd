import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./images/Logo";
import LogoMobile from "./images/LogoMobile";

export default function Header() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Games");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Games", path: "/games" },
    { name: "News", path: "/news" },
    { name: "Math", path: "/math" },
    { name: "Company", path: "/company" },
    { name: "Events", path: "/events" },
    { name: "Partners", path: "/partners" },
  ];

  const handleNavigation = (path, item) => {
    navigate(path);
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="sm:bg-black sm:bg-opacity-70 fixed w-full sm:h-[90px] h-[40px] z-50">
      <div className="flex sm:justify-around justify-between items-center h-full mx-auto sm:px-4 p-6">
        <div className="hidden md:block text-white">
          <Logo />
        </div>

        <div className="md:hidden text-white">
          <LogoMobile />
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <span className="block w-5 rounded-lg h-[3px] bg-white mb-1"></span>
            <span className="block w-5 rounded-lg h-[3px] bg-white mb-1"></span>
            <span className="block w-5 rounded-lg h-[3px] bg-white"></span>
          </button>
        </div>

        <nav className="hidden md:flex h-full">
          <ul className="flex space-x-12 h-full">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`font-normal text-sm cursor-pointer pb-2 flex justify-center items-center ${
                  activeItem === item.name
                    ? "text-white border-b-2 border-white"
                    : "text-white text-opacity-50 hover:text-white hover:border-b-2 hover:border-white"
                }`}
                onClick={() => handleNavigation(item.path, item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 transition-transform duration-300 ${
            isMenuOpen
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          } md:hidden`}
        >
          <ul className="flex flex-col h-full">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`font-normal text-sm cursor-pointer pb-2 flex justify-center items-center transition-transform duration-300 ${
                  activeItem === item.name
                    ? "text-white border-b-2 border-white"
                    : "text-white text-opacity-50 hover:text-white hover:border-b-2 hover:border-white"
                }`}
                onClick={() => handleNavigation(item.path, item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
