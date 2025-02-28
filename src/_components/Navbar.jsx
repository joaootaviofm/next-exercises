"use client"

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"
import { useState } from 'react'

export default function Navbar() {


    const [skillsOpen, setSkillsOpen] = useState(false)

    function toggleSkills() {
        setSkillsOpen(!skillsOpen)
    }


    const navList = [
        { item: "About", path: "#about" },
        { item: "Home", path: "#home" },
        { item: "Skills", path: "#skills" }
    ]

    return (
        <nav className="relative flex justify-center py-10 bg-[#2B2A27] text-white">
            <ul className="flex gap-11">
                {navList.map((item, index) => (
                    <li key={index}>
                        <a
                            className="font-bold"
                            href={item.path == "#skills" ? "#" : item.path}
                            onClick={item.item == "Skills" ? toggleSkills : null}
                        >
                            {item.item}
                        </a>
                    </li>
                ))}
            </ul>
            {skillsOpen && (
                <div className="absolute top-30">
                    <div className='flex flex-col rounded-lg bg-white text-black pb-5'>
                        <h1 className='text-2xl font-semibold p-7'>
                            Technologies used in this project
                        </h1>
                        <motion.div className="flex items-center justify-center gap-1 text-3xl">
                            <FaReact />
                            <RiNextjsFill />
                            <RiTailwindCssFill />
                        </motion.div>
                    </div>
                </div>
            )}
        </nav>
    )
}