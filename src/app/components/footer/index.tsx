// Assets
import losCuatro from "assets/loscuatro.webp";
// Components
import { CardSection } from "components/cardSection";
import { SongSection } from "./SongSection";
// Constants
import { VERSES } from "./verses";

export const Footer = () => (
  <CardSection
    {...{
      as: "footer",
      title: "Te esperamos",
      footer: "Carlos y Gabriela",
      image: {
        src: losCuatro,
        alt: "",
      },
    }}
  >
    <article className="grid gap-2 py-4 text-center text-secondary">
      {VERSES.map((verses, index) => (
        <SongSection key={index} verses={verses} />
      ))}
    </article>
  </CardSection>
);
