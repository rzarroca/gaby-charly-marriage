// Vendors
import Image from "next/image";
// Assets
import cygPhoto from "assets/photogyc.jpeg";
import stamp from "assets/mexico-stamp.png"

export const WeddingInfo = () => (
  <section
    className="w-[95%] grid bg-tertiary border-secondary border-8 border-double rounded-lg"
    aria-describedby="history"
  >
    <Image src={cygPhoto} alt="Gabriela y Carlos esperándolos en México" />
    <h2 className="text-2xl md:text-3xl py-[2dvh] border-b-secondary border-b-2 w-[95%] mx-auto uppercase">
      Pasaporte a nuestra boda
    </h2>
    <dl className="text-start px-2 py-[2dvh] border-b-secondary border-b-2 w-[95%] mx-auto relative">
    <Image src={stamp} alt="Gabriela y Carlos esperándolos en México" className="w-20 h-20 md:w-32 md:h-32 -rotate-12 absolute right-4 md:right-12 md:top-12" />
      <dt className="text-secondary md:text-xl">Fecha</dt>
      <dd className="text-yellow-950 md:text-xl">29/11/2025 - 6/12/2025 </dd>
      <dt className="text-secondary md:text-xl">Destino</dt>
      <dd className="text-yellow-950 md:text-xl">Playa del Carmen, Méxicos</dd>
      <dt className="text-secondary md:text-xl">Ceremonia</dt>
      <dd className="text-yellow-950 md:text-xl">Hotel Sandos Playacar</dd>
      <dt className="text-secondary md:text-xl">No olvidarse</dt>
      <dd className="text-yellow-950 md:text-xl">Mucha buena onda y ganas de festejar</dd>
    </dl>
    <p className="px-6 py-[2dvh] text-3xl md:text-4xl lg:text-5xl">Carlos & Gabriela</p>
  </section>
);
