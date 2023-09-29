import { logo } from "@/assets/images";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { routes } from "@/router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

interface Props {}

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/create-own-song") {
      setHeaderBg(true);
    } else setHeaderBg(false);
  }, [location]);

  return (
    <header
      className={`absolute z-30 w-full lg:pt-8 ${headerBg ? "bg-black pb-6 lg:pb-4" : ""}`}
    >
      <div className="container flex items-center justify-between mx-auto lg:max-w-5xl">
        <a href="/">
          <img className="w-24" src={logo} alt="Logo" />
        </a>
        <button
          className="text-white lg:hidden"
          onClick={() => {
            setMobileMenu(true);
          }}
        >
          <HiMenu color="currentColor" size={32} />
        </button>

        {/* Desktop */}
        <div className="items-center hidden lg:flex">
          <nav className="">
            <ul className="flex gap-8">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className="flex items-center gap-4 ml-12 uppercase">
            <a href="#">ru</a>
            <div className="bg-white rounded-full w-1.5 h-1.5"></div>
            <a href="#">eng</a>
          </div> */}
        </div>
      </div>
      <AnimatePresence>
        {mobileMenu && <MobileMenu toggle={setMobileMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
