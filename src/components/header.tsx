"use client";
import { links } from "@/lib/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 transform -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <div className="sm:hidden">
          <button onClick={toggleMenu}  className="fixed top-4 left-36 z-50 text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col bg-white sm:flex-row absolute sm:relative top-full  sm:bg-transparent mt-2 sm:mt-0 p-4 sm:p-0 rounded-lg shadow-lg sm:shadow-none sm:items-center sm:justify-center sm:gap-5`}>
          {links.map((link) => (
            <motion.li
              className="relative"
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300",
                  {
                    "text-gray-900 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}