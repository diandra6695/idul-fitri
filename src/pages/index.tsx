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
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HeadMetaData } from "@/components/layouts/head-meta-data";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function IdulFitriCard() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const idulFitriDate = dayjs("2025-03-31"); // Sesuaikan tanggal Idulfitri
  const now = dayjs();
  const isIdulFitri = now.isAfter(idulFitriDate);
  const router = useRouter();

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

  return (
    <AuroraBackground>
      <HeadMetaData />
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
                  <h1 className="font-extrabold text-3xl">
                    {hour < 0 ? "00" : hour}
                  </h1>
                  <p className="text-sm text-center">Jam</p>
                </div>
              </div>
              <div className="w-20 h-20 bg-white flex justify-center items-center shadow-md rounded-xl">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">
                    {minute < 0 ? "00" : minute}
                  </h1>
                  <p className="text-sm text-center">Menit</p>
                </div>
              </div>
              <div className="w-20 h-20 bg-white flex justify-center items-center shadow-md rounded-xl">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">
                    {second < 0 ? "00" : second}
                  </h1>
                  <p className="text-sm text-center">Detik</p>
                </div>
              </div>
            </div>
            {isIdulFitri ? (
              <ShimmerButton
                onClick={() => router.replace("/greeting")}
                className="font-bold"
              >
                Buka
              </ShimmerButton>
            ) : (
              <div className="bg-gradient-to-bl from-[#0D7124] text-white to-[#F3C203]/50 p-3 rounded-xl shadow-md">
                <p className="text-center text-xs">
                  Timer Lebaran udah mulai jalan nih! Dag dig dug ga sabar ya?
                  Tenang aja, hadiah spesialnya bakal bikin kamu shock saking
                  kerennya. Tunggu aja ya, ga bakal nyesel deh!
                </p>
              </div>
            )}
            <CardFooter className="flex justify-center">
              <div className="text-xs text-gray-400">
                &copy; 2025 Created by{" "}
                <Link
                  className="underline font-semibold text-gray-800"
                  href={"https://hexcon.vercel.app"}
                >
                  hexcon
                </Link>
              </div>
            </CardFooter>
            <BorderBeam
              duration={8}
              size={40}
              colorFrom="#0D7124"
              colorTo="#F3C203"
            />
          </Card>
        </BlurFade>
      </div>
    </AuroraBackground>
  );
}
