"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
    {
        title: "Cab",
        image: "/images/services/cab.png",
    },
    {
        title: "Auto",
        image: "/images/services/auto.png",
    },
    {
        title: "Bike Taxi",
        image: "/images/services/bike-taxi.png",
    },
    {
        title: "Parcel",
        image: "/images/services/parcel.png",
    },
    {
        title: "Truck",
        image: "/images/services/truck.png",
    },
    {
        title: "Ambulance",
        image: "/images/services/ambulance.png",
    },
];

const features = [
    "Verified Drivers",
    "Live Tracking",
    "24×7 Support",
    "Safe Rides",
    "Affordable Pricing",
    "Cashless Payments",
];

export default function ComingSoonPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-yellow-50/30 to-white">

            {/* Background Blur */}
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
            <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">

                {/* Badge */}

                <div className="flex justify-center">
                    <span className="rounded-full border border-yellow-300 bg-yellow-100 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                        🚀 COMING SOON
                    </span>
                </div>

                {/* Hero */}

                <div className="mx-auto mt-10 max-w-5xl text-center">

                    <h1
                        className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
                        style={{
                            fontFamily: "Comfortaa, sans-serif",
                        }}
                    >
                        Karnataka's Smartest
                        <br />
                        <span className="text-[#F4C400]">
                            Mobility Platform
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                        Book your everyday rides, transport goods,
                        send parcels, or request emergency ambulance
                        services—all from a single powerful app designed
                        for speed, safety, and convenience.
                    </p>

                </div>

                {/* Services */}

                <div className="mt-20">

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-yellow-300 hover:shadow-2xl"
                            >
                                <div className="relative mx-auto h-28 w-28">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain transition duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <h3
                                    className="mt-5 text-center text-lg font-bold text-gray-900"
                                    style={{
                                        fontFamily:
                                            "Comfortaa, sans-serif",
                                    }}
                                >
                                    {service.title}
                                </h3>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Stats */}

                <div className="mt-20 grid gap-6 md:grid-cols-4">

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <h2 className="text-4xl font-bold text-[#F4C400]">
                            24×7
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Customer Support
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <h2 className="text-4xl font-bold text-[#F4C400]">
                            100%
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Verified Drivers
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <h2 className="text-4xl font-bold text-[#F4C400]">
                            Live
                        </h2>
                        <p className="mt-2 text-gray-600">
                            GPS Tracking
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <h2 className="text-4xl font-bold text-[#F4C400]">
                            Fast
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Instant Booking
                        </p>
                    </div>

                </div>

                {/* Launch Section */}

                <div className="mt-24 rounded-[40px] border border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-10 shadow-xl">

                    <div className="mx-auto max-w-4xl text-center">

                        <h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl"
                            style={{
                                fontFamily:
                                    "Comfortaa, sans-serif",
                            }}
                        >
                            A New Way to Travel,
                            <br />
                            Deliver & Move.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Whether it's a quick city ride, a bike taxi,
                            parcel delivery, heavy transport, or emergency
                            medical assistance, GaadiGuru brings every
                            transportation service together into one
                            seamless experience.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            {features.map((feature) => (
                                <span
                                    key={feature}
                                    className="rounded-full border border-yellow-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm"
                                >
                                    ✓ {feature}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>                {/* Download App Section */}

                <div className="mt-24">

                    <div className="overflow-hidden rounded-[40px] bg-[#FFD700] shadow-2xl">

                        <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">

                            {/* Left */}

                            <div>

                                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-700">
                                    Mobile App
                                </span>

                                <h2
                                    className="mt-6 text-4xl font-bold leading-tight text-black"
                                    style={{
                                        fontFamily:
                                            "Comfortaa, sans-serif",
                                    }}
                                >
                                    Your Journey
                                    <br />
                                    Starts Soon.
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-800">
                                    Download the GaadiGuru app once it
                                    launches and enjoy seamless booking
                                    for Cab, Auto, Bike Taxi, Parcel,
                                    Truck and Ambulance services across
                                    Karnataka.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">

                                    <div className="rounded-xl bg-black px-6 py-4 text-white shadow-lg">
                                        <p className="text-xs uppercase text-gray-400">
                                            Coming Soon On
                                        </p>

                                        <p className="text-lg font-bold">
                                            Google Play
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-black px-6 py-4 text-white shadow-lg">
                                        <p className="text-xs uppercase text-gray-400">
                                            Coming Soon On
                                        </p>

                                        <p className="text-lg font-bold">
                                            App Store
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* QR */}

                            <div className="flex justify-center">

                                <div className="rounded-3xl bg-white p-8 shadow-xl">

                                    <Image
                                        src="/images/qr-code.png"
                                        alt="QR Code"
                                        width={220}
                                        height={220}
                                        className="rounded-xl"
                                    />

                                    <p className="mt-5 text-center font-semibold text-gray-700">
                                        Scan to download
                                        <br />
                                        after launch
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-24 text-center">

                    <h2
                        className="text-4xl font-bold text-gray-900"
                        style={{
                            fontFamily: "Comfortaa, sans-serif",
                        }}
                    >
                        We're Almost Ready 🚀
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Thank you for your patience. GaadiGuru is preparing
                        a smarter, safer, and faster mobility experience.
                        Stay tuned—we'll be launching very soon.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-800"
                        >
                            Back to Home
                            <FaArrowRight />
                        </Link>

                        <button className="rounded-full border-2 border-[#FFD700] bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 hover:bg-[#FFD700]">
                            Notify Me
                        </button>

                    </div>

                </div>

                {/* Footer */}

                <footer className="mt-24 border-t border-gray-200 pt-10">

                    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

                        <div>

                            <Image
                                src="/logo1.png"
                                alt="GaadiGuru"
                                width={50}
                                height={50}
                                className="h-auto w-auto"
                            />

                        </div>

                        <p className="text-center text-sm text-gray-500">
                            © {new Date().getFullYear()} NextSynergy Portals Private Limited. All Rights Reserved.
                        </p>

                    </div>

                </footer>

            </div>
        </main>
    );
}