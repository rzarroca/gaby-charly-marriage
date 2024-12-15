// Vendors
import Image from "next/image";
// Assets
import hotel from "assets/vectors/hotel.svg?url";
// Components
import { CommonTitle } from "components/commonTitle";
import { DetailItemComponent } from "./detail-item.component";
import { PageSection } from "components/pageSection";
import { Paragraph } from "components/paragraph";
import { WorldImage } from "components/worldImage";
// Constants
import { ROOM_LIST } from "./habitationList.constant";

export const HotelInfo = () => (
  <PageSection className="text-left">
    <WorldImage />
    <Image
      src={hotel}
      alt=""
      role="presentation"
      className="mx-auto w-1/2 md:w-1/3"
    />
    <div className="grid gap-4">
      <CommonTitle>Datos del hotel</CommonTitle>
      <Paragraph className="text-justify">
        Los precios de las habitaciones se congelan depositando el 15% del valor
        de la habitación elegida (300 US aprox).
      </Paragraph>
      <Paragraph className="text-justify">
        Contamos con una membresía por lo que todos disfrutaremos de los
        beneficios de tener pulsera BLACK.
      </Paragraph>
    </div>

    <div className="grid gap-4">
      <h3 className="text-center text-xl italic md:text-2xl">
        Precios Habitaciones <br /> (7 noches, 8 días):
      </h3>

      <dl className="grid gap-3 italic md:grid-cols-2">
        {ROOM_LIST.map((roomProps, index) => (
          <DetailItemComponent key={index} {...{ ...roomProps, index }} />
        ))}
      </dl>

      <small className="text-justify text-sm italic">
        Los aéreos los sacaremos en cuanto se habilite la fecha de noviembre,
        estén atentos por que se avisará en un grupo de WhatsApp que se va a
        crear.
      </small>
    </div>
  </PageSection>
);
