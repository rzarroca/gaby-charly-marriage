// Models
import { AsistanceModel } from "models/asistance";

export function generateConfirmationText({
  childrens,
  adults,
  names,
  message,
}: AsistanceModel) {
  let text =
    "Hola Gaby!\n\n" +
    "Has recibido una nueva confirmación:\n\n" +
    "- Cantidad de niños: " +
    childrens +
    "\n" +
    "- Cantidad de adultos: " +
    adults +
    "\n" +
    "- Nombres: " +
    names +
    "\n";

  if (message) {
    text += "- Mensajito: " + message + "\n";
  }

  return text;
}

const wrapperStyle =
  "font-family: Arial, sans-serif; font-style: italic; line-height: 1.6; color: #d2b646; padding: 16px; background-color: #162135; border: 1px solid #d2b646; border-radius: 8px;";
const titleStyle = "font-size: 24px; color: #d2b646; margin-bottom: 16px;";
const paragraphStyle = "font-size: 16px; margin-bottom: 16px;";
const listStyle = "list-style: none; padding: 0; margin: 0;";
const listItemStyle = "margin-bottom: 8px; font-size: 14px; color: #d2b646;";

export function generateConfirmationHTML({
  childrens,
  adults,
  names,
  message,
}: AsistanceModel) {
  let html = `
    <div style="${wrapperStyle}">
        <h1 style="${titleStyle}">Hola Gaby!</h1>
        <p style="${paragraphStyle}">Has recibido una nueva confirmación:</p>
        <ul style="${listStyle}">
            <li style="${listItemStyle}">Cantidad de niños: ${childrens}</li>
            <li style="${listItemStyle}">Cantidad de adultos: ${adults}</li>
            <li style="${listItemStyle}">Nombres: ${names}</li>
  `;

  if (message) {
    html += `<li style="${listItemStyle}">Mensajito: ${message}</li>`;
  }

  html += `
        </ul>
    </div>
  `;

  return html;
}
