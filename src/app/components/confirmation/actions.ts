"use server";
// Vendors
import { z } from "zod";
// Services
import { sendEmailService } from "services/sendEmail";

const schema = z.object({
  adults: z.number().min(1).max(10),
  childrens: z.number().min(0).max(10),
  names: z.string().min(1).max(255),
  message: z.string().min(0).max(1000),
});

export type SendEmailSchema = z.infer<typeof schema>;

export async function SendEmailAction(prevState: string, formData: FormData) {
  const { adults, childrens, names, message } = Object.fromEntries(formData);

  const validatedFields = schema.safeParse({
    adults: Number(adults),
    childrens: Number(childrens),
    names,
    message,
  });

  try {
    if (!validatedFields.success) throw new Error("Validated field error");
    await sendEmailService(validatedFields.data);
    return "success";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.log(e);
    return "error";
  }
}
