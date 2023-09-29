import { routes } from "@/router";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect } from "react";

interface Props {
  toggle: Function;
}

const variants: Variants = {
  visible: {
    y: 0,
  },
  invisible: {
    y: "-100vh",
  },
};

const MobileMenu = ({ toggle }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      transition={{ bounce: false }}
      variants={variants}
      initial="invisible"
      animate="visible"
      exit="invisible"
      className="fixed inset-0 bg-primary lg:hidden"
    >
      <div className="relative h-full mx-auto">
        <ul className="flex flex-col items-center justify-center h-full gap-16">
          {routes.map((route) => (
            <li
              className="text-2xl font-bold uppercase"
              key={route.name}
              onClick={() => {
                toggle(false);
              }}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>

        <button
          className="absolute z-10 right-4 top-4"
          onClick={() => {
            toggle(false);
          }}
        >
          <AiOutlineClose color="#fff" size={48} />
        </button>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
