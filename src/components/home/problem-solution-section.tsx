"use client";

import { motion } from "motion/react";

export default function ProblemSolutionSection() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // List item hover effect
  const listItemHover = {
    scale: 1.02,
    x: 5,
    transition: { duration: 0.2 },
  };

  return (
    <section id="problem-solution" className="relative pt-24 md:pt-32">
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Problem column */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl font-bold tracking-tight md:text-3xl"
            variants={itemVariants}
          >
            Tantangan Pemahaman Bacaan di Era Digital
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base text-balance md:text-lg"
            variants={itemVariants}
          >
            Indonesia masih tertinggal dalam hal pemahaman bacaan. Tiga
            angka di bawah ini memperlihatkan betapa seriusnya masalah
            ini:
          </motion.p>
          <motion.ul
            className="text-muted-foreground space-y-5 text-sm md:text-base"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                !
              </motion.div>
              <span className="max-w-[80%]">
                Skor PISA 2022 kita hanya 359—terpaut 117 poin di bawah
                rata-rata OECD (476).
              </span>
            </motion.li>
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                !
              </motion.div>
              <span className="max-w-[80%]">
                1 dari 2 siswa belum mencapai kompetensi literasi
                minimum menurut Asesmen Nasional 2021.{" "}
              </span>
            </motion.li>
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-600"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                !
              </motion.div>
              <span className="max-w-[80%]">
                Minat baca masyarakat tercatat 0,001 %; artinya hanya 1
                dari 1 000 orang yang gemar membaca.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Solution column */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl font-bold tracking-tight md:text-3xl"
            variants={itemVariants}
          >
            Tingkatkan Kemampuan Baca dengan Aksarify
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base text-balance md:text-lg"
            variants={itemVariants}
          >
            Aksarify membuat latihan super ringan yang bisa dipakai
            siapa saja, kapan saja untuk meningkatkan kemampuan membaca:
          </motion.p>
          <motion.ul
            className="text-muted-foreground space-y-5 text-sm md:text-base"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                ✓
              </motion.div>
              <span className="max-w-[80%]">
                Tes hanya beberapa menit—satu teks ±200 kata + 5 soal
                pilihan ganda tergantung kesulitan.
              </span>
            </motion.li>
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                ✓
              </motion.div>
              <span className="max-w-[80%]">
                Skor & pembahasan instan—begitu klik Kirim, kamu
                langsung tahu di mana letak salahmu
              </span>
            </motion.li>
            <motion.li
              className="flex gap-2"
              variants={itemVariants}
              whileHover={listItemHover}
            >
              <motion.div
                className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                ✓
              </motion.div>
              <span className="max-w-[80%]">
                Bacaan yang variatif—konten berubah setiap kali kamu
                mengerjakan tes, jadi tidak ada yang namanya jenuh!
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
