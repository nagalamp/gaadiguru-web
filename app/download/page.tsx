"use client";

import Image from "next/image";

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-[#FFD700] py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
                                GAADIGURU MOBILE APP
                            </span>

                            <h1
                                className="mt-5 text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl"
                                style={{
                                    fontFamily: "Comfortaa, sans-serif",
                                }}
                            >
                                Coming Soon
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-900">
                                Karnataka's next-generation mobility platform is
                                almost here.
                            </p>

                            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-900">
                                Book <strong>Cab</strong>,{" "}
                                <strong>Auto</strong>,{" "}
                                <strong>Bike Taxi</strong>,{" "}
                                <strong>Parcel Delivery</strong>,{" "}
                                <strong>Truck</strong> and{" "}
                                <strong>Ambulance</strong> services from one
                                powerful app.
                            </p>

                            <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold text-black"
                                    style={{
                                        fontFamily:
                                            "Comfortaa, sans-serif",
                                    }}
                                >
                                    🚀 Launching Soon
                                </h2>

                                <p className="mt-4 leading-8 text-gray-700">
                                    Our Android and iOS applications are
                                    currently under development. We are working
                                    hard to deliver a fast, safe and seamless
                                    experience for every journey across
                                    Karnataka.
                                </p>

                                <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-4">
                                    <p className="font-semibold text-gray-800">
                                        Stay tuned for the official launch!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Preview */}
                        <div className="flex justify-center">
                            <Image
                                src="/sample.jpeg"
                                alt="GaadiGuru Mobile App"
                                width={300}
                                height={610}
                                priority
                                className="h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}