import "server-only";
// Vendors
import { Resend } from "resend";
// Components
import { EmailTemplate } from "components/emailTemplate";
// Types
import { type SendEmailSchema } from "app/components/confirmation/actions";

const { RESEND_API_KEY, EMAIL_ADDRESS } = process.env;
const resend = new Resend(RESEND_API_KEY);

export async function sendEmailService(emailData: SendEmailSchema) {
  const { data, error } = await resend.emails.send({
    from: "Asistencias Boda <asistencias@resend.dev>",
    to: [EMAIL_ADDRESS!],
    subject: "Nueva confirmación de asistencia a la Boda",
    react: EmailTemplate(emailData),
  });

  if (error) {
    console.log("Error sending email:", error);
    throw new Error("Error sending email");
  }

  console.log("Success sending email. Data received:", data);
}
