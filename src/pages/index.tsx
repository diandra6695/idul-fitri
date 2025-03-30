import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { GlareCard } from "@/components/ui/glare-card";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SparklesText } from "@/components/magicui/sparkles-text";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function IdulFitriCard() {
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const idulFitriDate = dayjs("2025-03-31"); // Sesuaikan tanggal Idulfitri
  const now = dayjs();
  const isIdulFitri = now.isAfter(idulFitriDate);

  useEffect(() => {
    if (!isIdulFitri) {
      const interval = setInterval(() => {
        const diff = idulFitriDate.diff(dayjs(), "second");
        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isIdulFitri]);

  const handleCardClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpened(true);
        setIsAnimating(false);
      }, 1200); // Waktu sesuai durasi animasi
    }
  };

  return (
    <AuroraBackground>
      <div className="flex justify-center items-center min-h-screen">
        <BlurFade inView>
          <Card className="w-[320px] px-5 backdrop-blur-2xl bg-white/50 rounded-xl shadow-lg">
            <SparklesText
              text="Hari Raya Idul Fitri"
              className="text-center text-[#0D7124]"
            />
            <div className={`${geistSans.className} flex justify-center gap-4`}>
              <div className="w-20 h-20 bg-white flex justify-center items-center shadow-md rounded-xl">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">{hour}</h1>
                  <p className="text-sm text-center">Jam</p>
                </div>
              </div>
              <div className="w-20 h-20 bg-white flex justify-center items-center shadow-md rounded-xl">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">{minute}</h1>
                  <p className="text-sm text-center">Menit</p>
                </div>
              </div>
              <div className="w-20 h-20 bg-white flex justify-center items-center shadow-md rounded-xl">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">{second}</h1>
                  <p className="text-sm text-center">Detik</p>
                </div>
              </div>
            </div>
            {/* <Card className="p-0 w-[80px] h-[80px] border shadow-none rounded-none bg-[#EEE7DB] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
              <CardHeader className="bg-red-400 rounded-t m-0">jam</CardHeader>
              <CardContent className="pt-0">01</CardContent>
            </Card>
            <h1 className="font-black text-6xl text-center">{timeLeft}</h1> */}
            <CardFooter className="flex justify-center">
              <div className="text-xs text-gray-400">
                &copy; 2025 Created by{" "}
                <Link
                  className="underline font-semibold"
                  href={"https://hexcon.vercel.app"}
                >
                  hexcon
                </Link>
              </div>
            </CardFooter>
            <BorderBeam
              duration={8}
              size={100}
              colorFrom="#0D7124"
              colorTo="#F3C203"
            />
          </Card>
        </BlurFade>
      </div>
    </AuroraBackground>
  );
}
