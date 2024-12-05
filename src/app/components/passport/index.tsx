// Vendors
import Image from "next/image";
// Assets
import gycStampUrl from "assets/vectors/gyc-stamp.svg?url";
import heartLoopUrl from "assets/vectors/heart-loop.svg?url";
import compassUrl from "assets/vectors/compass.svg?url";

export const Passport = () => (
  <header className="h-dvh relative" aria-describedby="presentation">
    <Image
      src={compassUrl}
      alt=""
      aria-hidden
      className="size-16 md:size-28 lg:size-32 absolute right-[2%] top-[25%]"
    />
    <h1
      id="presentation"
      className="font-bold text-6xl md:text-7xl lg:text-8xl pb-[10%] h-full flex flex-col justify-end items-center gap-10"
    >
      <span className="h-full grid place-content-center">Pasaporte</span>
      <Image src={heartLoopUrl} alt="" aria-hidden className="rotate-6 " />
      <Image src={gycStampUrl} alt="" aria-hidden className="lg:size-48" />
      <span className="font-normal text-2xl md:text-3xl">A la boda de</span>
      <strong className="text-3xl md:text-6xl">Carlos y Gabriela</strong>
    </h1>
  </header>
);
