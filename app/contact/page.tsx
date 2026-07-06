export default function ContactPage() {
    return (
        <main className="bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <h1
                        className="text-4xl font-bold text-gray-900 md:text-5xl"
                        style={{ fontFamily: "Comfortaa, sans-serif" }}
                    >
                        Contact Us
                    </h1>

                    <p className="mt-4 text-xl font-semibold text-red-600">
                        ಕನ್ನಡದವರಿಂದ ಕನ್ನಡಿಗರಿಗಾಗಿ
                    </p>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                        Have questions, need assistance, or interested in
                        partnering with GaadiGuru? We'd love to hear from you.
                        Reach out to us anytime through phone, email, WhatsApp,
                        or by filling out the contact form below.
                    </p>

                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

                    {/* Contact Details */}
                    <div>

                        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                            CONTACT INFORMATION
                        </span>

                        <h2
                            className="mt-6 text-4xl font-bold text-gray-900"
                            style={{ fontFamily: "Comfortaa, sans-serif" }}
                        >
                            Get in Touch
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Reach out to us for customer support, business
                            partnerships, driver onboarding, or general
                            inquiries. Our team is always happy to help.
                        </p>

                        <div className="mt-10 space-y-8">

                            <div className="rounded-2xl bg-white p-6 shadow-md">
                                <h3 className="text-lg font-bold text-yellow-600">
                                    📍 Address
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    Bengaluru,
                                    <br />
                                    Karnataka, India
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-md">
                                <h3 className="text-lg font-bold text-yellow-600">
                                    📞 Mobile
                                </h3>

                                <a
                                    href="tel:+919902668555"
                                    className="mt-3 block text-lg text-gray-700 transition hover:text-yellow-600"
                                >
                                    +91 99026 68555
                                </a>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-md">
                                <h3 className="text-lg font-bold text-yellow-600">
                                    📧 Email
                                </h3>

                                <a
                                    href="mailto:support@gaadiguru.com"
                                    className="mt-3 block text-lg text-gray-700 transition hover:text-yellow-600"
                                >
                                    support@gaadiguru.com
                                </a>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-md">
                                <h3 className="text-lg font-bold text-yellow-600">
                                    💬 WhatsApp
                                </h3>

                                <a
                                    href="https://wa.me/919902668555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 block text-lg text-gray-700 transition hover:text-green-600"
                                >
                                    +91 99026 68555
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl bg-white p-8 shadow-xl">

                        <h2
                            className="mb-8 text-3xl font-bold text-gray-900"
                            style={{ fontFamily: "Comfortaa, sans-serif" }}
                        >
                            Send us a Message
                        </h2>

                        <form className="space-y-6">

                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Mobile Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:bg-yellow-500"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </section>

            {/* Google Map */}
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                        <iframe
                            title="GaadiGuru Location"
                            src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
                            width="100%"
                            height="450"
                            loading="lazy"
                            className="border-0"
                        />

                    </div>

                </div>
            </section>

        </main>
    );
}