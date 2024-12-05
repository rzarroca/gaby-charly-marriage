// Vendors
import Image from "next/image";
// Assets
import heartUrl from "assets/vectors/heart.svg?url";
import horLoopUrl from "assets/vectors/horizontal-loop.svg?url";

export const Invitation = () => (
  <section
    className="h-dvh py-[10dvh] relative grid justify-items-center"
    aria-describedby="history"
  >
    <p
      id="history"
      className="flex flex-col font-curly text-5xl leading-snug px-[10dvw]"
    >
      <span>Después de</span>
      <span>13 años juntos</span>
      <span>(y dos hijos)</span>
    </p>
    <p className="justify-self-stretch text-start font-sans text-lg md:text-xl">
      <Image src={horLoopUrl} alt="" role="presentation" />
      <span className="px-[10dvw]">decidimos dar el SI</span>
    </p>
    <p className="text-3xl md:text-4xl font-curly leading-snug px-[10dvw]">
      así que prepara tus maletas, el pasaporte
      <br />y acompáñanos en esta aventura !
    </p>

    <Image
      src={heartUrl}
      alt=""
      role="presentation"
      className="w-12 h-12 sm:w-20 sm:h-20 absolute bottom-[5dvh] left-[10dvw]"
    />
  </section>
);
