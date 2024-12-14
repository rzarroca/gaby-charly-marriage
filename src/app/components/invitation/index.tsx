// Vendors
import Image from "next/image";
// Assets
import heartUrl from "assets/vectors/heart.svg?url";
import horLoopUrl from "assets/vectors/horizontal-loop.svg?url";
// Componets
import { WorldImage } from "components/worldImage";

export const Invitation = () => (
  <section className="relative grid h-dvh justify-items-center py-[10dvh]">
    <WorldImage />
    <p className="flex flex-col px-[10dvw] font-curly text-5xl leading-snug">
      <span>Después de</span>
      <span>13 años juntos</span>
      <span>(y dos hijos)</span>
    </p>
    <p className="justify-self-stretch text-start font-sans text-lg md:text-xl">
      <Image src={horLoopUrl} alt="" role="presentation" />
      <span className="px-[10dvw]">decidimos dar el SI</span>
    </p>
    <p className="px-[10dvw] font-curly text-3xl leading-snug md:text-4xl">
      así que prepara tus maletas, el pasaporte
      <br />y acompáñanos en esta aventura !
    </p>

    <Image
      src={heartUrl}
      alt=""
      role="presentation"
      className="absolute bottom-[5dvh] left-[10dvw] h-12 w-12 sm:h-20 sm:w-20"
    />
  </section>
);
