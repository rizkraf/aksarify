"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "motion/react";

export default function KeyFeaturesSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -30 },
    show: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="key-features" className="relative pt-24 md:pt-32">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="mb-12 max-w-2xl text-2xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Fitur Unggulan yang bikin kamu betah berlatih
        </motion.h2>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
          <Card className="shadow-none border transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <motion.div
                className="text-primary mb-4 text-2xl md:text-3xl"
                variants={iconVariants}
                whileHover="hover"
              >
                ⏱️
              </motion.div>
              <CardTitle>Tes Kilat Hanya Hitungan Menit</CardTitle>
              <CardDescription>
                Satu teks & lima soal, cukup untuk mengukur pemahamanmu
                terhadap bacaan.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="shadow-none border transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <motion.div
                className="text-primary mb-4 text-2xl md:text-3xl"
                variants={iconVariants}
                whileHover="hover"
              >
                ✅
              </motion.div>
              <CardTitle>Skor Instan</CardTitle>
              <CardDescription>
                Klik Kirim dan langsung lihat jawaban benar-salah plus
                tips singkat.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="shadow-none border transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <motion.div
                className="text-primary mb-4 text-2xl md:text-3xl"
                variants={iconVariants}
                whileHover="hover"
              >
                📚
              </motion.div>
              <CardTitle>Bacaan Yang Variatif</CardTitle>
              <CardDescription>
                Koleksi bacaan dengan tingkat kesulitan dan topik yang
                berbeda agar kamu tidak bosan.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
