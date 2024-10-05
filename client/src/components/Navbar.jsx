import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import j from "../assets/logo.png"; // Updated path to logo in src/assets

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current path for conditional rendering
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);

    if (nav.isOnHome) {

      navigate("/#" + nav.id)
      // If we're on the home page, scroll to section
      window.scrollTo({
        top: document.getElementById(nav.id)?.offsetTop - 100,
        behavior: "smooth",
      });
    } else {
      navigate("/" + nav.id)
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={j} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Juliano &nbsp;
            <span className="sm:block hidden"> | Code With Juliano</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-[#915EFF]" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav)}
            >
              {nav.isOnHome && location.pathname === "/" ? (
                <a href={`#${nav.id}`}>{nav.title}</a>
              ) : (
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 fixed top-20 bg-gray-200 right-5 w-1/2 z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-[#8c5cf3] ${active === nav.title ? "text-[#915EFF]" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavClick(nav);
                  }}
                >
                  {nav.isOnHome && location.pathname === "/" ? (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
