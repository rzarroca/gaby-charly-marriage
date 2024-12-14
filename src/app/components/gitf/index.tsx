// Vendors
import Image from "next/image";
// Assets
import gift from "assets/vectors/gift.svg?url";
// Components
import { CommonTitle } from "components/commonTitle";
import { WorldImage } from "components/worldImage";
import { PageSection } from "components/pageSection";
import { Paragraph } from "components/paragraph";

export const Gift = () => (
  <PageSection>
    <WorldImage />
    <Image
      src={gift}
      alt=""
      role="presentation"
      className="mx-auto w-1/4 md:w-1/6"
    />
    <CommonTitle>Regalo</CommonTitle>
    <Paragraph>El mejor regalo que puedes hacernos es tu presencia</Paragraph>
  </PageSection>
);
