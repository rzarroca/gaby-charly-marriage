// Vendors
import Image from "next/image";
// Assets
import travelTicket from "assets/vectors/travel-ticket.svg?url";
// Components
import { CommonTitle } from "components/commonTitle";
import { Timer } from "./timer";
import { PageSection } from "components/pageSection";

export const Countdown = () => (
  <PageSection>
    <Image
      src={travelTicket}
      alt=""
      role="presentation"
      className="mx-auto w-1/2 md:w-1/3"
    />
    <CommonTitle>
      Cuenta regresiva para iniciar el embarque a nuestra nueva aventura
    </CommonTitle>
    <Timer />
  </PageSection>
);
