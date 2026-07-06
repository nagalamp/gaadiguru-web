export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900">
                        About GaadiGuru
                    </h1>

                    <p className="mt-4 text-xl font-semibold text-red-600">
                        ಕನ್ನಡದವರಿಂದ ಕನ್ನಡಿಗರಿಗಾಗಿ
                    </p>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
                        Building Karnataka's most trusted digital platform for
                        vehicle services, logistics, and commercial transportation.
                    </p>
                </div>
            </section>

            {/* About */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        {/* Left */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Who We Are
                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">
                                GaadiGuru is a technology-driven mobility and
                                vehicle services platform designed to connect
                                customers with trusted garages, verified truck
                                owners, roadside assistance providers, towing
                                services, mechanics, and genuine spare parts.
                            </p>

                            <p className="mt-6 leading-8 text-gray-600">
                                We believe every vehicle owner deserves fast,
                                transparent, and reliable services without the
                                hassle of searching through multiple providers.
                                GaadiGuru brings everything together in one
                                easy-to-use platform.
                            </p>

                            <p className="mt-6 leading-8 text-gray-600">
                                Starting in Karnataka, our mission is to create
                                a trusted ecosystem that empowers drivers,
                                garages, fleet owners, transport businesses,
                                and customers through technology.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="rounded-3xl bg-yellow-50 p-10 shadow-lg">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Our Mission
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                To simplify vehicle services and logistics by
                                connecting customers with verified service
                                providers while ensuring transparency,
                                affordability, and trust.
                            </p>

                            <h3 className="mt-10 text-3xl font-bold text-gray-900">
                                Our Vision
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                To become India's most trusted digital platform
                                for vehicle services and commercial
                                transportation, empowering millions of drivers
                                and businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-center text-4xl font-bold text-gray-900">
                        Why Choose GaadiGuru?
                    </h2>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl bg-white p-8 shadow-md">
                            <h3 className="text-xl font-bold">
                                Verified Partners
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Trusted garages, truck owners and service
                                providers.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-md">
                            <h3 className="text-xl font-bold">
                                Transparent Pricing
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Fair pricing with no hidden charges.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-md">
                            <h3 className="text-xl font-bold">
                                24×7 Support
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Assistance whenever you need it.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-md">
                            <h3 className="text-xl font-bold">
                                Built for Karnataka
                            </h3>
                            <p className="mt-4 text-gray-600">
                                ಕನ್ನಡದವರಿಂದ ಕನ್ನಡಿಗರಿಗಾಗಿ.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 text-center md:grid-cols-4">
                        <div>
                            <h2 className="text-5xl font-bold text-yellow-500">
                                1000+
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Verified Drivers
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-yellow-500">
                                500+
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Garages
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-yellow-500">
                                50+
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Cities
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-yellow-500">
                                24×7
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Customer Support
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-yellow-400 py-20">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Join the GaadiGuru Journey
                    </h2>

                    <p className="mt-6 text-lg text-gray-800">
                        Whether you're a customer, driver, garage owner, or
                        fleet operator, GaadiGuru is your trusted partner for
                        smarter vehicle services.
                    </p>

                    <button className="mt-10 rounded-full bg-black px-10 py-4 text-lg font-bold text-white transition hover:bg-gray-800">
                        Become a Partner
                    </button>
                </div>
            </section>
        </main>
    );
}