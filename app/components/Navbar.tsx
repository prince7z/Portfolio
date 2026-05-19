"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/datas/data";
import Link from "next/link";
import { HiDocumentText } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        // show on scroll up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // show navbar if mouse near top
      if (e.clientY < 80) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <section
        className={`
          fixed top-0 h-20 lg:h-20
          flex flex-row items-center
          w-full justify-between
          px-2 sm:px-16
          z-50 backdrop-blur-lg
          shadow-sm border-b
          transition-all duration-500 ease-in-out
          will-change-transform
          ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-start sm:justify-center items-center uppercase tracking-wider"
        >
          <h1 className="text-3xl sm:text-3xl font-bold lg:text-4xl text-secondary-color-3 font-idgrotesk">
            Prince
          </h1>

          <p className="text-xl sm:text-2xl lg:text-2xl font-extrabold font-grotesk">
            Sahu
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 leading-relaxed text-base md:text-lg">
          <nav className="w-full flex flex-row items-center">
            <ul className="w-full flex flex-row justify-start items-center text-xl gap-4">
              {sections.map((section, id) => (
                <Button
                  variant={"link"}
                  key={id}
                  className="hidden lg:inline-block"
                  asChild
                >
                  <Link href={section.idRoute}>{section.name}</Link>
                </Button>
              ))}

              <ThemeSwitcher />

              <li className="hidden lg:inline-block">
                <Button asChild variant={"outline"}>
                  <Link
                    href="https://drive.google.com/file/d/1s0Q8kjDT-JK94n-FURTvtvsxNJDVANB1/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                    <HiDocumentText size={25} className="ml-2" />
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden z-50">
          <button
            className={`hamburger ${
              isOpen ? "open" : ""
            } relative z-30 w-8 h-4 flex flex-col justify-between items-center`}
            onClick={toggleMenu}
          >
            <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>

            <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-opacity duration-300 ease-in-out"></span>

            <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 w-full h-lvh bg-black/50 lg:hidden"
        >
          {/* Mobile Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 h-full w-3/4 bg-white dark:bg-black shadow-lg p-4"
          >
            <nav className="w-full flex flex-col items-center z-40 mt-36 gap-4 justify-center">
              {sections.map((section, id) => (
                <Button variant={"link"} key={id} asChild>
                  <Link
                    href={section.idRoute}
                    className="dark:text-primary-color"
                    onClick={toggleMenu}
                  >
                    {section.name}
                  </Link>
                </Button>
              ))}

              <Button asChild variant={"outline"}>
                <Link
                  href="https://drive.google.com/file/d/1s0Q8kjDT-JK94n-FURTvtvsxNJDVANB1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  View Resume
                  <HiDocumentText size={25} />
                </Link>
              </Button>

              <ThemeSwitcher />
            </nav>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Navbar;