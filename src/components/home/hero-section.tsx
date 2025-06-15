"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-24 md:pt-32">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          className="max-w-4xl scroll-m-20 text-4xl font-medium tracking-tight md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uji Pemahaman Bacamu{" "}
          <motion.span
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Dalam Hitungan menit!
          </motion.span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mt-6 max-w-2xl text-lg text-balance md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Aksarify adalah platform interaktif yang dirancang khusus
          untuk membantu kamu mengukur dan meningkatkan kemampuan
          pemahaman bacaan Bahasa Indonesia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="mt-12 font-semibold">
            <Link href="/test">Mulai Tes Gratis</Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="mx-auto mt-16 w-full max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.div
          className="relative aspect-video w-full overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/website-preview.png"
            alt="Tampilan platform Aksarify untuk tes pemahaman bacaan Bahasa Indonesia"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
