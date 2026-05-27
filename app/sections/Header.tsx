"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ScrollDownArrow from "@/app/components/ScrollDownArrow";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which image to show based on theme
  const profileImage = theme === "light" ? "/br.webp" : "/br.webp";

  return (
    <>
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center  bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] lg:min-h-screen  ">
      <section
        className="w-full xl:w-[70%] relative pb-10 flex flex-col gap-4 lg:w-[70%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <span className="text-lg">Hi, I'm</span>
          <h1 className="font-bold text-6xl md:text-7xl font-display">
            Prince Sahu
          </h1>
        </div>

<div className="relative">
  <p className="mt-2 leading-relaxed text-base md:text-lg">
    I am Prince Sahu, an India-based freelance software engineer helping businesses grow by building secure scalable applications, backend
    systems, and cloud infrastructure for modern products. My work focuses
    on{" "}
    <span className="text-[#E88D67] font-medium">
      performance, reliability, security, and scalability
    </span>{" "}
    — from backend architecture and DevOps workflows to infrastructure
    management, security auditing, application optimization, and production
    deployment.
    <br />
    <br />
    Freelance engineer helping ideas become stable, production-ready
    systems that scale with business growth.
  </p>
</div>

        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:princesahu17125@gmail.com"}
            className="flex items-center border-black justify-center gap-3 px-5 py-2 font-medium w-max border-[1px] mt-5 "
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />
          </Link>
        </Button>
      </section>
<section
  className="relative flex items-center justify-center md:justify-center lg:justify-end
  w-full xl:w-[30%] lg:w-[30%] h-[25rem]
  bg-center lg:bg-right bg-contain bg-no-repeat group
  -translate-y-8"
  style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
  data-aos="zoom-in"
>
  <div className="relative w-full h-full">
    <Image
      alt="profile image"
      src={profileImage}
      quality={100}
      fill
      priority
      className="
      -translate-y-4
        object-contain
        grayscale-[20%]
        contrast-[1.1]
        scale-[1.2]
        saturate-[1.05]
        transition-all
        duration-700
        group-hover:scale-[1.3]
        group-hover:-translate-y-11
      "
    />
    {/* Subtle fade overlay at bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-black dark:via-black/40 pointer-events-none translate-y-7 transition-all duration-700 group-hover:translate-y-4.5" />
  </div>
  <ScrollDownArrow />
</section>
    </header>
    </>
  );
};
export default Header;
