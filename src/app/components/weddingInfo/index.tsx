// Vendors
import Image from "next/image";
// Assets
import cygPhoto from "assets/photogyc.jpeg";
import stamp from "assets/mexico-stamp.png";

export const WeddingInfo = () => (
  <section className="grid w-[95%] place-self-center rounded-lg border-8 border-double border-secondary bg-tertiary">
    <Image src={cygPhoto} alt="Gabriela y Carlos esperándolos en México" />
    <h2 className="mx-auto w-[95%] border-b-2 border-b-secondary py-[2dvh] text-2xl uppercase md:text-3xl">
      Pasaporte a nuestra boda
    </h2>
    <dl className="relative mx-auto w-[95%] border-b-2 border-b-secondary px-2 py-[2dvh] text-start">
      <Image
        src={stamp}
        role="presentation"
        alt=""
        className="absolute right-6 h-24 w-24 -rotate-12 md:right-12 md:top-12 md:h-32 md:w-32"
      />
      <dt className="text-secondary md:text-xl">Fecha</dt>
      <dd className="text-yellow-950 md:text-xl">29/11/2025 - 6/12/2025 </dd>
      <dt className="text-secondary md:text-xl">Destino</dt>
      <dd className="text-yellow-950 md:text-xl">Playa del Carmen, México</dd>
      <dt className="text-secondary md:text-xl">Ceremonia</dt>
      <dd className="text-yellow-950 md:text-xl">Hotel Sandos Playacar</dd>
      <dt className="text-secondary md:text-xl">No olvidarse</dt>
      <dd className="text-yellow-950 md:text-xl">
        Mucha buena onda y ganas de festejar
      </dd>
    </dl>
    <p className="px-6 py-[2dvh] text-3xl md:text-4xl lg:text-5xl">
      Carlos & Gabriela
    </p>
  </section>
);
