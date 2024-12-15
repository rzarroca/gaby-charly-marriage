"use client";
// Vendors
import Form from "next/form";
import Image from "next/image";
import toast from "react-hot-toast";
import { useActionState, useEffect } from "react";
// Actions
import { SendEmailAction } from "./actions";
// Assets
import travelHands from "assets/travel-hands.png";
// Components
import { CommonTitle } from "components/commonTitle";
import { SubmitButton } from "./submitButton";
// Enumerations
import { MESSAGE_STATUS_ENUMERATION } from "enumerations";

export const Confirmation = () => {
  const [{ id, status }, formAction] = useActionState(SendEmailAction, {
    status: MESSAGE_STATUS_ENUMERATION.SUCCESS,
    id: "",
  });

  useEffect(() => {
    if (status === MESSAGE_STATUS_ENUMERATION.SUCCESS) {
      toast.success("Asistencia Confirmada!");
    } else if (status === MESSAGE_STATUS_ENUMERATION.ERROR) {
      toast.error("Ha habido un error. Inténtalo otra vez");
    }
  }, [id, status]);

  return (
    <Form
      action={formAction}
      className="grid w-full gap-4 px-[5%] py-[5svh] text-left"
    >
      <Image
        src={travelHands}
        alt=""
        role="presentation"
        className="mx-auto w-1/2 md:w-1/3"
      />
      <CommonTitle>Asistencia</CommonTitle>

      <fieldset className="grid gap-2 italic">
        <label htmlFor="adults">Cantidad de adultos:</label>
        <input
          className="rounded-sm px-2 py-1 text-secondary"
          defaultValue="1"
          id="adults"
          max="10"
          min="1"
          name="adults"
          required
          step="1"
          type="number"
        />

        <label htmlFor="childrens">Cantidad de niños:</label>
        <input
          className="rounded-sm px-2 py-1 text-secondary"
          defaultValue="0"
          id="childrens"
          max="10"
          min="0"
          name="childrens"
          required
          step="1"
          type="number"
        />

        <label htmlFor="names">Nombres:</label>
        <input
          className="rounded-sm px-2 py-1 text-secondary"
          id="names"
          name="names"
          required
          type="text"
          maxLength={255}
        />

        <label htmlFor="message">Si quieres, deja un mensaje:</label>
        <textarea
          className="rounded-sm px-2 py-1 text-secondary"
          id="message"
          name="message"
          maxLength={1000}
        />
      </fieldset>

      <SubmitButton />
    </Form>
  );
};
