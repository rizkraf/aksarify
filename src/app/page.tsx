import CTASection from "@/components/home/cta-section";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import KeyFeaturesSection from "@/components/home/key-features-section";
import ProblemSolutionSection from "@/components/home/problem-solution-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aksarify - Uji Pemahaman Bacamu Dalam Hitungan Menit",
  description:
    "Platform tes pemahaman bacaan Bahasa Indonesia dengan metode efektif dan menyenangkan. Tingkatkan literasi membacamu dalam hitungan menit dengan Aksarify.",
};

export default function Home() {
  return (
    <>
      <div className="bg-background relative flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col p-4">
            <HeroSection />
            <ProblemSolutionSection />
            <HowItWorksSection />
            <KeyFeaturesSection />
            <CTASection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
