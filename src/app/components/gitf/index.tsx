// Vendors
import Image from "next/image";
// Assets
import gift from "assets/vectors/gift.svg?url";
// Components
import { CommonTitle } from "components/commonTitle";
import { ItalicParagraph } from "components/italicParagraph";

export const Gift = () => (
  <section className="common-section grid gap-4">
    <Image
      src={gift}
      alt=""
      role="presentation"
      className="mx-auto w-1/4 md:w-1/6"
    />
    <CommonTitle>Regalo</CommonTitle>
    <ItalicParagraph>
      El mejor regalo que puedes hacernos es tu presencia
    </ItalicParagraph>
  </section>
);
