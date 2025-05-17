import { PrismaClient, Level, Skill } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /* ---------- PASSAGE 1 : MUDAH ---------- */
  await prisma.passage.create({
    data: {
      level: Level.mudah,
      title: "Kancil di Kebun Sayur",
      body: `Suatu pagi, Kancil merasa lapar setelah berlari-lari di hutan.
Ia pun menengok ke kebun sayur Pak Tani yang tak jauh dari pinggir hutan.
Di sana tumbuh selada hijau segar yang tampak sangat menggoda.
Tanpa pikir panjang, Kancil melompat pagar rendah dan mulai mencicipi selada.
Namun suara gaduhnya membuat Pak Tani terbangun.
Pak Tani berlari sambil membawa tongkat, tetapi Kancil lebih cepat.
Ia bergegas keluar pagar dan menghilang ke balik semak.
Keesokan harinya, Pak Tani memasang pagar bambu lebih tinggi agar hasil kebunnya aman.`,
      questions: {
        create: [
          {
            prompt: "Mengapa Kancil mendatangi kebun Pak Tani?",
            options: [
              "Ia tersesat",
              "Ia lapar",
              "Ia takut dikejar",
              "Ia mencari teman",
            ],
            answerIdx: 1,
            skill: Skill.detail,
          },
          {
            prompt: "Apa yang dilakukan Pak Tani setelah kebunnya dimakan?",
            options: [
              "Memasang pagar bambu lebih tinggi",
              "Membiarkan kebunnya rusak",
              "Mengejar Kancil hingga hutan",
              "Memanen selada lebih cepat",
            ],
            answerIdx: 0,
            skill: Skill.detail,
          },
          {
            prompt: "Kalimat mana yang menjadi ide pokok paragraf ke-4?",
            options: [
              "Pak Tani berlari sambil membawa tongkat",
              "Kancil melompat pagar rendah",
              "Suara gaduhnya membuat Pak Tani terbangun",
              "Kancil bergegas keluar pagar",
            ],
            answerIdx: 2,
            skill: Skill.ide_pokok,
          },
          {
            prompt:
              "Dari cerita tersebut, sifat apa yang paling tepat menggambarkan Kancil?",
            options: ["Cerdik", "Pemalas", "Penakut", "Pemarah"],
            answerIdx: 0,
            skill: Skill.inferensi,
          },
          {
            prompt: "Apa tujuan Pak Tani memasang pagar bambu lebih tinggi?",
            options: [
              "Agar seladanya tumbuh cepat",
              "Supaya Kancil tidak mudah masuk lagi",
              "Untuk menandai batas tanah",
              "Sebagai hiasan kebun",
            ],
            answerIdx: 1,
            skill: Skill.inferensi,
          },
        ],
      },
    },
  });

  /* ---------- PASSAGE 2 : MENENGAH ---------- */
  await prisma.passage.create({
    data: {
      level: Level.menengah,
      title: "Dilema Sampah Plastik Sekali Pakai",
      body: `Kantong plastik sekali pakai masih menjadi pilihan utama pedagang pasar tradisional karena murah dan praktis.
Menurut data Kementerian Lingkungan Hidup, konsumsi kantong plastik Indonesia mencapai 9,8 miliar lembar per tahun.
Sebagian besar akhirnya berakhir di sungai dan laut, merusak ekosistem serta rantai makanan.
Beberapa kota besar telah menerapkan larangan kantong plastik, namun pelaksanaannya belum merata.
Industri bioplastik digadang-gadang sebagai solusi, meski biayanya masih 3-4 kali lipat kantong konvensional.
Kesuksesan pengurangan sampah plastik sangat bergantung pada perubahan perilaku konsumen dan insentif bagi produsen.`,
      questions: {
        create: [
          {
            prompt:
              "Apa alasan utama pedagang pasar masih memakai kantong plastik sekali pakai?",
            options: [
              "Dapat terurai lebih cepat",
              "Murah dan praktis",
              "Tahan panas",
              "Diwajibkan pemerintah",
            ],
            answerIdx: 1,
            skill: Skill.detail,
          },
          {
            prompt:
              "Berapa konsumsi kantong plastik Indonesia per tahun menurut data yang disebutkan?",
            options: [
              "9,8 juta lembar",
              "9,8 miliar lembar",
              "98 miliar lembar",
              "98 juta lembar",
            ],
            answerIdx: 1,
            skill: Skill.detail,
          },
          {
            prompt: "Apa yang dimaksud dengan “dilema” pada judul bacaan?",
            options: [
              "Plastik sulit ditemukan",
              "Larangan plastik merusak ekonomi",
              "Ada pertentangan antara kemudahan dan dampak lingkungan",
              "Bioplastik tidak bisa diproduksi",
            ],
            answerIdx: 2,
            skill: Skill.inferensi,
          },
          {
            prompt:
              "Kalimat manakah yang merupakan ide pokok paragraf terakhir?",
            options: [
              "Industri bioplastik digadang-gadang sebagai solusi",
              "Kesuksesan pengurangan sampah plastik tergantung perilaku konsumen dan insentif",
              "Bioplastik 3-4 kali lipat lebih mahal",
              "Larangan kantong plastik belum merata",
            ],
            answerIdx: 1,
            skill: Skill.ide_pokok,
          },
          {
            prompt: "Mengapa biaya bioplastik disebut sebagai tantangan?",
            options: [
              "Produksinya masih sedikit sehingga mahal",
              "Tidak ada pabrik di Indonesia",
              "Bioplastik berbahaya bagi kesehatan",
              "Bahan bakunya sulit diperoleh",
            ],
            answerIdx: 0,
            skill: Skill.inferensi,
          },
        ],
      },
    },
  });

  /* ---------- PASSAGE 3 : SULIT ---------- */
  await prisma.passage.create({
    data: {
      level: Level.sulit,
      title: "Paradoks Pertumbuhan Hijau",
      body: `Istilah "pertumbuhan hijau" kerap dikibarkan sebagai jawaban atas krisis iklim.
Konsep ini berasumsi bahwa ekonomi dapat terus tumbuh sementara emisi gas rumah kaca turun melalui inovasi teknologi dan efisiensi energi.
Namun sejumlah ekonom ekologis berpendapat sebaliknya: planet dengan sumber daya terbatas tidak mampu menopang ekspansi konsumsi tanpa menimbulkan jejak karbon yang signifikan.
Di sisi lain, pemerintah negara berkembang bergantung pada ekspor komoditas untuk membiayai agenda sosial.
Jika eksploitasi dihentikan demi lingkungan, pemasukan negara berisiko anjlok, memicu ketimpangan baru.
Paradoksnya, kebijakan yang terlalu pro-lingkungan dapat menimbulkan resistensi politik, sehingga tujuan konservasi justru tak tercapai.
Maka, tantangan terbesar bukan sekadar menemukan teknologi hijau, melainkan merancang model ekonomi yang menyeimbangkan pertumbuhan, pemerataan, dan daya dukung bumi.`,
      questions: {
        create: [
          {
            prompt: "Apa asumsi utama konsep “pertumbuhan hijau”?",
            options: [
              "Ekonomi harus berhenti tumbuh demi lingkungan",
              "Teknologi dapat memisahkan pertumbuhan ekonomi dari emisi",
              "Eksploitasi komoditas meningkatkan kesejahteraan",
              "Efisiensi energi selalu gagal",
            ],
            answerIdx: 1,
            skill: Skill.detail,
          },
          {
            prompt:
              "Mengapa pemerintah negara berkembang sulit menghentikan eksploitasi sumber daya?",
            options: [
              "Kurangnya tenaga ahli",
              "Tekanan politik dari oposisi",
              "Eksploitasi menjadi sumber pendapatan penting",
              "Keterbatasan teknologi hijau",
            ],
            answerIdx: 2,
            skill: Skill.inferensi,
          },
          {
            prompt: "Apa ide pokok paragraf terakhir?",
            options: [
              "Paradoks kebijakan pro-lingkungan",
              "Teknologi hijau mudah ditemukan",
              "Tantangan utama adalah menyeimbangkan pertumbuhan, pemerataan, dan daya dukung bumi",
              "Ekonom ekologis menolak pertumbuhan",
            ],
            answerIdx: 2,
            skill: Skill.ide_pokok,
          },
          {
            prompt:
              "Istilah “jejak karbon” dalam konteks bacaan mengacu pada …",
            options: [
              "Volume gas rumah kaca yang dihasilkan aktivitas manusia",
              "Jumlah karbon dalam tanah",
              "Karbon yang dikonsumsi tumbuhan",
              "Batu bara yang belum ditambang",
            ],
            answerIdx: 0,
            skill: Skill.detail,
          },
          {
            prompt: "Apa paradoks yang dimaksud penulis?",
            options: [
              "Teknologi mahal tapi tidak efektif",
              "Kebijakan hijau bisa memicu penolakan hingga tujuan tidak tercapai",
              "Pertumbuhan ekonomi selalu baik",
              "Emisi gas rumah kaca tidak berbahaya",
            ],
            answerIdx: 1,
            skill: Skill.inferensi,
          },
        ],
      },
    },
  });
}

main()
  .then(() => {
    console.log("✅  Seed selesai!");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
