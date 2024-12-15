// Vendors
import Image from "next/image";
// Assets
import cygPhoto from "assets/photogyc.jpeg";
import stamp from "assets/mexico-stamp.png";
// Components
import { CardSection } from "components/cardSection";

export const WeddingInfo = () => (
  <CardSection
    {...{
      image: {
        src: cygPhoto,
        alt: "Gabriela y Carlos esperándolos en México",
      },
      title: "Pasaporte a nuestra boda",
      className: "uppercase",
      footer: "Carlos & Gabriela",
    }}
  >
    <dl className="relative mx-auto w-[95%] px-2 py-[2dvh] text-start">
      <Image
        src={stamp}
        role="presentation"
        alt=""
        className="absolute right-6 h-24 w-24 -rotate-12 md:right-12 md:top-12 md:h-32 md:w-32"
      />
      <dt className="text-sm text-secondary md:text-lg">Fecha</dt>
      <dd className="mb-2 text-yellow-950 md:text-xl">
        29/11/2025 - 6/12/2025{" "}
      </dd>
      <dt className="text-sm text-secondary md:text-lg">Destino</dt>
      <dd className="mb-2 text-yellow-950 md:text-xl">
        Playa del Carmen, México
      </dd>
      <dt className="text-sm text-secondary md:text-lg">Ceremonia</dt>
      <dd className="mb-2 text-yellow-950 md:text-xl">Hotel Sandos Playacar</dd>
      <dt className="text-sm text-secondary md:text-lg">No olvidarse</dt>
      <dd className="mb-2 text-yellow-950 md:text-xl">
        Mucha buena onda y ganas de festejar
      </dd>
    </dl>
  </CardSection>
);
