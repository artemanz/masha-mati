import { logo } from "@/assets/images";
import { routes } from "@/router";
import { Link } from "react-router-dom";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-accent-dark">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex flex-col items-center w-full py-12 border-b-2 border-b-accent">
          <img className="w-[100px]" src={logo} alt="Logo" />

          <nav className="text-center">
            <ul className="flex flex-col gap-8 mt-8 lg:flex-row">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className="flex items-center gap-2 mt-8 uppercase">
            <a href="#">ru</a>
            <div className="bg-white rounded-full w-1.5 h-1.5"></div>
            <a href="#">eng</a>
          </div> */}
        </div>
        <div className="py-10">
          <a
            className="underline underline-offset-4"
            href="https://weblab420.com/"
            target="_blank"
          >
            Created by: WEBLAB 420
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
