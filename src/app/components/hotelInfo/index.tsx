// Components
import { DetailItemComponent } from "./detail-item.component";
import { CommonTitle } from "components/commonTitle";
// Constants
import { ROOM_LIST } from "./habitationList.constant";

export const HotelInfo = () => (
  <section className="grid w-full gap-8 px-[5%] py-[5dvh] text-left">
    <div className="grid gap-4">
      <CommonTitle>Datos del hotel</CommonTitle>
      <p className="text-justify">
        Los precios de las habitaciones se congelan depositando el 15% del valor
        de la habitación elegida (300 US aprox).
      </p>
      <p className="text-justify">
        Contamos con una membresía por lo que todos disfrutaremos de los
        beneficios de tener pulsera BLACK{" "}
        <span aria-label="guiño de ojo">😜</span>
      </p>
    </div>

    <div className="grid gap-2">
      <h3 className="text-xl md:text-2xl">Precios (7 noches, 8 días)</h3>
      <ul className="grid gap-3">
        {ROOM_LIST.map((roomProps, index) => (
          <DetailItemComponent key={index} {...roomProps} />
        ))}
      </ul>
    </div>

    <small className="text-justify text-sm">
      Los aéreos los sacaremos en cuanto se habilite la fecha de noviembre,
      estén atentos por que les avisare a un grupo de WhatsApp que voy a crear.
    </small>
  </section>
);
