import "server-only";
// Vendors
import formData from "form-data";
import Mailgun from "mailgun.js";
// Enumerations
import { MESSAGE_STATUS_ENUMERATION } from "enumerations";
// Models
import { AsistanceModel } from "models/asistance";
// Utils
import { generateConfirmationHTML, generateConfirmationText } from "./utils";

const mailgun = new Mailgun(formData);

const {
  MAILGUN_DOMAIN,
  MAILGUN_API_KEY,
  TO_EMAIL_ADDRESS_1,
  TO_EMAIL_ADDRESS_2 = "",
} = process.env;

const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY!,
});

export async function sendEmailService(
  emailData: AsistanceModel,
): Promise<
  (typeof MESSAGE_STATUS_ENUMERATION)[keyof typeof MESSAGE_STATUS_ENUMERATION]
> {
  try {
    const response = await mg.messages.create(MAILGUN_DOMAIN!, {
      from: "Confirmaciones <confirmaciones@casamiento.info>",
      to: [TO_EMAIL_ADDRESS_1!, TO_EMAIL_ADDRESS_2],
      subject: "Nueva asistencia confirmada!",
      text: generateConfirmationText(emailData),
      html: generateConfirmationHTML(emailData),
    });

    console.log("Email sent:", response);
    return MESSAGE_STATUS_ENUMERATION.SUCCESS;
  } catch (error) {
    console.error("Error sending email:", error);
    return MESSAGE_STATUS_ENUMERATION.ERROR;
  }
}
