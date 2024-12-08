// Vendors
import Image from "next/image";
// Assets
import travelHands from "assets/travel-hands.png";
// Components
import { CommonTitle } from "components/commonTitle";

export const Confirmation = () => (
  <form action="" className="common-section grid gap-4 text-left">
    <Image
      src={travelHands}
      alt=""
      role="presentation"
      className="mx-auto w-1/2 md:w-1/3"
    />
    <CommonTitle>Confirma tu presencia!</CommonTitle>

    <fieldset className="grid gap-2">
      <label htmlFor="asistants">Cuantos son?</label>
      <input
        type="number"
        name="asistants"
        id="asistants"
        min="0"
        max="10"
        step="1"
        className="rounded-sm px-2 py-1 text-secondary"
      />

      <label htmlFor="name">Quienes? *</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="rounded-sm px-2 py-1 text-secondary"
      />
    </fieldset>

    <button className="rounded-sm border-2 border-primary px-2 py-1 text-lg md:text-xl">
      Enviar
    </button>
  </form>
);
