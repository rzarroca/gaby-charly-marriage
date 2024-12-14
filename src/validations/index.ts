// Models
import { AsistanceModel, asistanceModel } from "models/asistance";

export const validateSendEmailAction = (formData: FormData): AsistanceModel => {
  const { adults, childrens, names, message } = Object.fromEntries(formData);

  const validatedFields = asistanceModel.safeParse({
    adults: Number(adults),
    childrens: Number(childrens),
    names,
    message,
  });

  if (!validatedFields.success) throw new Error("Validated field error");
  return validatedFields.data;
};
