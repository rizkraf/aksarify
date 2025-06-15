"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <motion.section
      id="cta"
      className="bg-primary/5 relative my-24 rounded-2xl p-12 text-center md:my-32"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-4 text-2xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Siap Tingkatkan Pemahaman Bacamu?
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Mulai beberapa menit untuk tes pertamamu.
        </motion.p>
        <motion.div
          className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.6,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="font-semibold">
              <Link href="/test">Mulai Tes Gratis</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
