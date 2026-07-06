"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaBars,
    FaTimes,
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
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="fixed inset-x-0 top-0 z-50 border-b border-yellow-500 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFD54F] shadow-lg"
            style={{ fontFamily: "Comfortaa, sans-serif" }}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo1.png"
                        alt="GaadiGuru"
                        width={180}
                        height={60}
                        priority
                        className="h-12 w-auto object-contain sm:h-14"
                    />
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-4 md:flex">
                    {/* Navigation */}

                    {/* Uncomment if needed */}

                    {/* <nav className="flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-semibold text-gray-900 transition hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
          </nav> */}

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/gaadiguru.rides"
                        target="_blank"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition-all duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white"
                    >
                        <FaInstagram size={18} />
                    </Link>

                    {/* Facebook */}
                    <Link
                        href="https://www.facebook.com/profile.php?id=100009114045419"
                        target="_blank"
                        aria-label="Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
                    >
                        <FaFacebookF size={17} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-gray-900 md:hidden"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden bg-[#FFC107] transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 border-t border-yellow-500" : "max-h-0"
                    }`}
            >
                <div className="space-y-5 px-6 py-6">
                    {/* Navigation */}

                    {/* Uncomment if needed */}

                    {/* <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-900 hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
          </nav> */}

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <Link
                            href="https://www.instagram.com/gaadiguru.rides"
                            target="_blank"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition hover:bg-pink-500 hover:text-white"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="https://www.facebook.com/profile.php?id=100009114045419"
                            target="_blank"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow transition hover:bg-blue-600 hover:text-white"
                        >
                            <FaFacebookF />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}