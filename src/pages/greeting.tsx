import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Card, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const GreatingPage = () => {
  return (
    <AuroraBackground>
      <div className="flex justify-center items-center min-h-screen">
        <BlurFade inView>
          <Card className="w-[320px] px-5 backdrop-blur-2xl bg-white/50 rounded-xl shadow-lg">
            <SparklesText
              text="Selamat Hari Raya Idul Fitri 1446 H 🌙✨"
              className="text-center text-[#0D7124]"
            />
            <div className="flex flex-col space-y-2">
              <TextAnimate className="text-center text-xs">
                Taqabbalallahu minna wa minkum...
              </TextAnimate>
              <TextAnimate className="text-center text-xs font-semibold">
                Selamat Hari Raya Idul Fitri! Minal aidin wal faidzin, mohon
                maaf lahir dan batin ya🙏.
              </TextAnimate>
              <TextAnimate className="text-center text-xs">
                Setelah sebulan penuh berpuasa, akhirnya kita sampai di momen
                yang ditunggu-tunggu. Semoga semua amalan kita selama Ramadhan
                diterima Allah SWT.
              </TextAnimate>
              <TextAnimate className="text-center text-xs">
                Hari ini adalah saatnya kita berbagi kebahagiaan,
                bermaaf-maafan, dan menikmati ketupat dengan opor yang lezat.
                Semoga keberkahan Idul Fitri membawa kebahagiaan untuk kita
                semua.
              </TextAnimate>
              <TextAnimate className="text-center text-xs">
                Yuk, rayakan dengan penuh sukacita bersama keluarga tercinta!
                Selamat berlebaran dan jangan lupa bagi-bagi THR, hehe.
              </TextAnimate>
            </div>
            <ShinyButton>test</ShinyButton>
            <ShimmerButton>test</ShimmerButton>
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
              size={40}
              colorFrom="#0D7124"
              colorTo="#F3C203"
            />
          </Card>
        </BlurFade>
      </div>
    </AuroraBackground>
  );
};

export default GreatingPage;
