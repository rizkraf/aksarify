"use client";

import { motion } from "motion/react";

export default function HowItWorksSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  const cardHover = {
    y: -10,
    transition: { duration: 0.3 }
  };

  return (
    <motion.section
      id="how-it-works"
      className="bg-secondary/5 relative pt-24 md:pt-32 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="mb-12 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Tiga Langkah Mudah untuk Meningkatkan Kemampuan Membaca
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex flex-col items-center rounded-lg p-6"
            variants={itemVariants}
            whileHover={cardHover}
          >
            <motion.div
              className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold"
              variants={numberVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
            >
              1
            </motion.div>
            <motion.h3
              className="mb-2 text-lg font-bold md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Baca Teks
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Baca teks yang disajikan dengan seksama. Teks akan
              bervariasi setiap kali kamu mengerjakan tes.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg p-6"
            variants={itemVariants}
            whileHover={cardHover}
          >
            <motion.div
              className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold"
              variants={numberVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
            >
              2
            </motion.div>
            <motion.h3
              className="mb-2 text-lg font-bold md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Jawab 5 Soal
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Jawab 5 soal pilihan ganda yang menguji pemahamanmu
              terhadap teks yang telah dibaca.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg p-6"
            variants={itemVariants}
            whileHover={cardHover}
          >
            <motion.div
              className="bg-primary text-primary-foreground mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold"
              variants={numberVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
            >
              3
            </motion.div>
            <motion.h3
              className="mb-2 text-lg font-bold md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Lihat Hasil dan Pembahasan
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Hasil muncul seketika; ulangi kapan saja untuk terus
              mengasah kemampuan membaca kamu.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
