"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#FFD700]"
        >
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                <Image
                    src="/images/hero/banner-image.png"
                    alt="GaadiGuru Hero Banner"
                    width={1920}
                    height={400}
                    priority
                    className="w-full h-[600px] object-cover"
                />
            </div>
        </section>
    );
}