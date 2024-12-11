// Types
import { type SendEmailSchema } from "app/components/confirmation/actions";

export const EmailTemplate = ({
  adults,
  childrens,
  names,
  message,
}: SendEmailSchema) => (
  <div>
    <h1>Hola Gaby!</h1>
    <p>Has recibido una nueva confirmación:</p>
    <ul>
      <li>Cantidad de niños: {childrens}</li>
      <li>Cantidad de adultos: {adults}</li>
      <li>Nombres: {names}</li>
      <li>Mensajito: {message}</li>
    </ul>
  </div>
);
