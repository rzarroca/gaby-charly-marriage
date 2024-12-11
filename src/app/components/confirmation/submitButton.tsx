"use client";
// Vendors
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-sm border-2 border-primary px-2 py-1 text-lg md:text-xl"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};
