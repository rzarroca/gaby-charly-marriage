// Vendors
import Image from "next/image";
// Assets
import travelTicket from "assets/vectors/travel-ticket.svg?url";
// Components
import { CommonTitle } from "components/commonTitle";
import { Timer } from "./timer";

export const Countdown = () => (
  <section className="common-section grid gap-4">
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
  </section>
);
