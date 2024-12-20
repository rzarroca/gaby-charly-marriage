"use server";
// Enumerations
import { MESSAGE_STATUS_ENUMERATION } from "enumerations";
// Services
import { sendEmailService } from "services/sendEmail";
// Utils
import { createUid } from "lib";
// Validations
import { validateSendEmailAction } from "validations";

export type SendEmailActionReturnType = {
  status: (typeof MESSAGE_STATUS_ENUMERATION)[keyof typeof MESSAGE_STATUS_ENUMERATION];
  id: string;
};

export async function SendEmailAction(
  _: SendEmailActionReturnType,
  formData: FormData,
): Promise<SendEmailActionReturnType> {
  try {
    const result = await sendEmailService(validateSendEmailAction(formData));
    return {
      status: result,
      id: createUid(),
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return {
      status: MESSAGE_STATUS_ENUMERATION.ERROR,
      id: createUid(),
    };
  }
}
