"use client";

import { technologies } from "@/datas/data";
import { useEffect } from "react";
import gsap from "gsap";

const roles = [
  "Backend Engineering",
  "DevOps",
  "Cloud Infrastructure",
  "Full Stack Development",
  "System Design",
  "App Development",
  "Security Auditing",
  "Performance Optimization",
  "Rust Development",
];

const About = () => {
  useEffect(() => {
    const items = gsap.utils.toArray(".role-item");

    gsap.set(items, {
      y: 40,
      opacity: 0,
      position: "absolute",
    });

    const tl = gsap.timeline({
      repeat: -1,
    });

    items.forEach((item:any) => {
      tl.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          item,
          {
            y: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in",
          },
          "+=1.5"
        );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-medium">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>

        <span className="text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>

        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full py-10 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-medium">Technologies I work with</h4>

          <div className="bg-no-repeat bg-contain">
            <ul className="px-6 py-6 flex flex-wrap gap-x-10 gap-y-4 sm:grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0 hover:font-medium"
                >
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />

                  <span className="hidden sm:inline-block">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article className="leading-relaxed text-base md:text-lg">
            <p>
              I’m Prince Sahu, a Software Engineer who designs and maintains
              the systems that power modern digital products.
            </p>

            <div className="flex items-center gap-3 mt-6 mb-6 flex-wrap">
              <span className="text-neutral-400">
                Specializing in
              </span>

              <div className="relative h-8 overflow-hidden min-w-[260px]">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="role-item text-[#E88D67] font-medium whitespace-nowrap left-0 top-0"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <p>
              I help businesses build scalable, secure, and production-ready
              applications through reliable architecture, infrastructure
              management, and modern engineering practices.
            </p>

            <br />

            <p>
              My work spans backend engineering, DevOps workflows, cloud
              infrastructure, performance optimization, and security-focused
              development — helping products scale efficiently in production.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;