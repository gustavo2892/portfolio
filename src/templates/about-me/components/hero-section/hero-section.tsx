import { Dictionary } from "@/get-dictionary";
import Image from "next/image";

export const HeroSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="container relative flex items-start justify-start">
      <div className="flex md:grid md:grid-cols-2 gap-1 min-h-[20rem] md:h-[33rem] lg:h-[24rem] xl:h-[20rem] flex-col">
        <div className="flex flex-col items-center justify-center md:justify-start gap-4 md:items-start lg:items-start">
          <h2 className="text-blue-300 text-heading-xs font-sans text-left">
            {dictionary["about-me"].first}
            <br />
            {dictionary["about-me"].second}
            <br />
            {dictionary["about-me"].third}
          </h2>
        </div>

        <div className="flex h-[14rem] md:h-full order-first md:order-last md:items-start justify-center md:flex lg:flex mb-8 md:mb-0">
          <Image
            src="/assets/photo.png"
            alt="Ilustração com ícones de store, tag e sacola"
            width={150}
            height={150}
            className="w-auto object-contain rounded-[2.5rem] md:rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
