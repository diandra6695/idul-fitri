import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GamePage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [completeGame, setCompleteGame] = useState(false);
  const [hasilIndex, setHasilIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const indexAcak = Math.floor(Math.random() * 12);
    setHasilIndex(indexAcak);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const gameComplete = localStorage.getItem("gameComplete");
    if (gameComplete) {
      setCompleteGame(true);
    }
  }, []);

  const handeleIsCompleteGame = () => {
    setIsComplete(true);
    localStorage.setItem("gameComplete", "true");
  };

  return (
    <AuroraBackground>
      <div className="flex justify-center items-center min-h-screen">
        <BlurFade inView>
          <Card className="w-[320px] px-5 backdrop-blur-2xl bg-white/50 rounded-xl shadow-lg">
            {isLoading ? (
              <SparklesText
                text="Loading..."
                className="text-center text-[#0D7124]"
              />
            ) : (
              <>
                <SparklesText
                  text="Semoga Beruntung!✨"
                  className="text-center text-[#0D7124]"
                />
                <div className="">
                  <p className="text-sm font-medium text-muted-foreground text-center">
                    Gosok untuk membuka hadiah.
                  </p>
                </div>
                {completeGame ? (
                  <div className="text-center bg-[#F3C203] text-white p-4 rounded-xl font-bold">
                    <p>Yahh maaf ya, Kamu udah buka hadiah sebelumnya :(</p>
                  </div>
                ) : (
                  <ScratchToReveal
                    width={280}
                    onComplete={() => handeleIsCompleteGame()}
                    height={250}
                    minScratchPercentage={60}
                    className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                    gradientColors={["#0D7124", "#4DB157", "#F3C203"]}
                  >
                    {hasilIndex !== 10 && hasilIndex !== 11 ? (
                      <div className="flex flex-col gap-4 items-center">
                        <Image
                          src={`/images/memes/${hasilIndex}.jpg`}
                          width={150}
                          height={150}
                          alt="meme"
                        />
                        <p className="text-muted-foreground text-center text-xs">
                          Yahh maaf ya kamu belum beruntung :(
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 items-center">
                        <Image
                          src={"/images/dana.svg"}
                          height={50}
                          width={100}
                          alt="logo"
                        />
                        <p className="text-[#008DEC] text-center text-xs">
                          Klik tombol claim yang ada di bawah untuk mengambil
                          hadiah!
                        </p>
                      </div>
                    )}
                  </ScratchToReveal>
                )}
                {isComplete && (hasilIndex === 10 || hasilIndex === 11) && (
                  <div className="w-full flex justify-center">
                    <Link
                      href={
                        "https://link.dana.id/danakaget?c=sna7snlyn&r=eGvyjm&orderId=20250330101214778315010300166947014759796"
                      }
                    >
                      <Button className="bg-[#0D7124] text-white" size={"sm"}>
                        Ambil Hadiah!
                      </Button>
                    </Link>
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
              </>
            )}
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

export default GamePage;
