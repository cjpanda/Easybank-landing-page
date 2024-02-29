import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";
import NavOpen from "../assets/icon-hamburger.svg";
import NavClose from "../assets/icon-close.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //add eventListener
    window.addEventListener("scroll", handleScroll);

    //remove event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-light py-5" : "bg-white py-5"
      } fixed w-full mx-auto transition-all duration-300 padding-x`}
    >
      <div className=" xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center  ">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img src={Logo} alt="Logo" width={180} height={100} />
          </Link>
          {/* Hamburger Menu  */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <img src={NavClose} alt="Hambuger Close" />
            ) : (
              <img src={NavOpen} />
            )}
          </div>
        </div>

        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 "
              : "max-h-0 xl:max-h-max text-secondary"
          } flex flex-col w-full text-primary xl:bg-transparent  gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:pb-0 transition-all duration-150 text-center xl:text-left  text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="cursor-pointer"
            to="blog"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Blog
          </Link>
          <Link
            className="cursor-pointer"
            to="careers"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Careers
          </Link>
        </nav>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block ">
          <button className="gradient p-2 px-7 text-light rounded-3xl font-semibold hover:opacity-85">
            Request Invite
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
