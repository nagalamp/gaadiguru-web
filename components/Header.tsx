"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-500 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFD54F] shadow-lg"
            style={{ fontFamily: "Comfortaa, sans-serif" }}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo1.png"
                        alt="GaadiGuru"
                        width={180}
                        height={60}
                        priority
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Right Side */}
                <div className="ml-auto flex items-center gap-8">

                    {/* Navigation */}
                    {/* <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="font-semibold text-gray-900 transition-colors duration-300 hover:text-red-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav> */}

                    {/* Social Icons */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="https://www.instagram.com/gaadiguru.rides"
                            target="_blank"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white"
                        >
                            <FaInstagram size={18} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/profile.php?id=100009114045419"
                            target="_blank"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
                        >
                            <FaFacebookF size={17} />
                        </Link>

                        {/* <Link
                            href="https://linkedin.com"
                            target="_blank"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition-all duration-300 hover:scale-110 hover:bg-sky-700 hover:text-white"
                        >
                            <FaLinkedinIn size={17} />
                        </Link> */}
                    </div>


                </div>

            </div>
        </header>
    );
}