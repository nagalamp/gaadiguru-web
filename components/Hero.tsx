"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#FFD700] m-t:2">
            <div className="relative h-[180px] w-full sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
                <Image
                    src="/images/hero/banner.png"
                    alt="GaadiGuru Hero Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
        </section>
    );
}