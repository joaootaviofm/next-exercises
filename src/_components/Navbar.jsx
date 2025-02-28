"use client";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const navList = [
    { item: "About", path: "#about" },
    { item: "Home", path: "#home" },
    { item: "Skills", path: "#skills" },
  ];

  return (
    <nav className="relative flex justify-center py-10 bg-[#2B2A27] text-white">
      <ul className="flex gap-11">
        {navList.map((item, index) => (
          <li key={index}>
            <a
              className="font-bold flex items-center justify-center"
              href={item.path == "#skills" ? "#" : item.path}
              onMouseEnter={() => item.item == "Skills" && setSkillsOpen(true)}
              onMouseLeave={() => item.item == "Skills" && setSkillsOpen(false)}
            >
              {item.item}
              {item.item == "Skills" && <span className="text-sm"></span>}
            </a>
          </li>
        ))}
      </ul>
      {skillsOpen && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ y: -30, opacity: 0 }}
          className="absolute top-30"
        >
          <div className="flex flex-col rounded-lg bg-white text-black pb-5 drop-shadow-lg">
            <h1 className="text-2xl font-semibold p-7">
              Technologies used in this project
            </h1>
            <div className="flex items-center justify-center gap-1 text-3xl">
              <FaReact />
              <RiNextjsFill />
              <RiTailwindCssFill />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
