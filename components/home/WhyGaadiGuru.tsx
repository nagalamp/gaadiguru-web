"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
    {
        title: "Cab",
        image: "/images/vehicles/car.png",
    },
    {
        title: "Auto",
        image: "/images/vehicles/auto.png",
    },
    {
        title: "Bike Taxi",
        image: "/images/vehicles/bike.png",
    },
    {
        title: "Parcel",
        image: "/images/vehicles/parcel.png",
    },
    {
        title: "Truck",
        image: "/images/vehicles/truck.png",
    },
    {
        title: "Ambulance",
        image: "/images/vehicles/ambulance.png",
    }
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

                    <h2
                        className="text-3xl font-bold text-gray-900 md:text-4xl"
                        style={{
                            fontFamily:
                                "Comfortaa, sans-serif",
                        }}
                    >
                        A Complete Automotive Ecosystem
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                        GaadiGuru is an upcoming digital automotive platform that unifies mobility services, vehicle marketplaces, logistics, spare parts commerce, vehicle servicing, roadside assistance, financing, insurance, and AI-powered automotive solutions. Built for customers, drivers, dealerships, workshops, fleet operators, and businesses, GaadiGuru aims to deliver a smarter, faster, and more connected automotive experience.
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


                        <h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl"
                            style={{
                                fontFamily:
                                    "Comfortaa, sans-serif",
                            }}
                        >
                            24×7
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Customer Support
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">


                        <h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl"
                            style={{
                                fontFamily:
                                    "Comfortaa, sans-serif",
                            }}
                        >
                            100%
                        </h2>


                        <p className="mt-2 text-gray-600">
                            Verified Drivers
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">


                        <h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl"
                            style={{
                                fontFamily:
                                    "Comfortaa, sans-serif",
                            }}
                        >
                            Live
                        </h2>
                        <p className="mt-2 text-gray-600">
                            GPS Tracking
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">


                        <h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl"
                            style={{
                                fontFamily:
                                    "Comfortaa, sans-serif",
                            }}
                        >
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
                        Stay tuned we'll be launching very soon.
                    </p>

                    {/* <div className="mt-10 flex flex-wrap justify-center gap-5">

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

                    </div> */}

                </div>

                {/* Footer */}

                <footer className="mt-24 border-t border-gray-200 pt-10">

                    <div className="flex flex-col items-center  gap-5 md:flex-row">

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