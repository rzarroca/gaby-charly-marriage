// Vendors
import Image from "next/image";
// Assets
import gycStampUrl from "assets/vectors/gyc-stamp.svg?url";
import heartLoopUrl from "assets/vectors/heart-loop.svg?url";
import compassUrl from "assets/vectors/compass.svg?url";

export const Header = () => (
  <header className="relative h-dvh">
    <Image
      src={compassUrl}
      alt=""
      aria-hidden
      className="absolute right-[2%] top-[25%] size-16 md:size-28 lg:size-32"
    />
    <h1 className="flex h-full flex-col items-center justify-end gap-10 pb-[10%] text-6xl font-bold md:text-7xl lg:text-8xl">
      <span className="grid h-full place-content-center">Pasaporte</span>
      <Image src={heartLoopUrl} alt="" aria-hidden className="rotate-6" />
      <Image src={gycStampUrl} alt="" aria-hidden className="lg:size-48" />
      <span className="text-2xl font-normal md:text-3xl">A la boda de</span>
      <strong className="text-3xl md:text-6xl">Carlos y Gabriela</strong>
    </h1>
  </header>
);
