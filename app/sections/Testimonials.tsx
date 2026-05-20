"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/datas/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  const activeTestimonial = testimonials[index];
  const { name, position, image, testimonial } = activeTestimonial;

  return (
    <section id="endorsement" className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-16 pb-24 lg:pt-28">
      <header className="flex flex-row gap-4 justify-start items-center ">
        <span className="font-medium text-lg sm:text-2xl font-idgrotesk">
          04. From Clients ,Engineers and Mentors. 
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </header>

      <div className="relative bg-transparent rounded-lg p-6 pb-20 lg:p-12 lg:pb-12 flex flex-col lg:flex-row items-center gap-8 min-h-[18rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex w-full flex-col lg:flex-row items-center gap-8"
          >
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto lg:mx-0">
                <Image src={image} alt={name} fill className="object-cover object-center" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left relative">
                <Image
                  src="https://api.iconify.design/fa6-solid/quote-left.svg"
                  alt="quote-left"
                  width={24}
                  height={24}
                  className="inline-block ml-2 align-middle"
                />
              <motion.p
                key={`${index}-quote`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {testimonial}
                <Image
                  src="https://api.iconify.design/fa6-solid/quote-right.svg"
                  alt="quote-right"
                  width={24}
                  height={24}
                  className="inline-block ml-2 align-middle"
                />
              </motion.p>
              <motion.div
                key={`${index}-meta`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                className="mt-4"
              >
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{position}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 lg:static lg:translate-x-0">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-secondary-color-3" : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
