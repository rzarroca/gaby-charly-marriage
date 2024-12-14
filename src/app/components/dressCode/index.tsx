// Vendors
import Image from "next/image";
// Assets
import glasses from "assets/vectors/glasses.svg?url";
import hat from "assets/vectors/hat.svg?url";

// Components
import { PageSection } from "components/pageSection";
import { CommonTitle } from "components/commonTitle";
import { ItalicParagraph } from "components/italicParagraph";
import { WorldImage } from "components/worldImage";

export const DressCode = () => (
  <PageSection className="relative">
    <WorldImage />
    <CommonTitle>Código de vestimenta para la boda</CommonTitle>
    <ItalicParagraph>Elegante playero</ItalicParagraph>
    <ItalicParagraph>Colores pasteles</ItalicParagraph>
    <Image
      src={glasses}
      alt=""
      role="presentation"
      className="absolute left-4 mx-auto w-1/5 translate-y-[15dvh] md:left-12 md:w-1/6"
    />
    <Image
      src={hat}
      alt=""
      role="presentation"
      className="absolute right-4 mx-auto w-1/5 translate-y-[20dvh] md:right-12 md:w-1/6"
    />
  </PageSection>
);
