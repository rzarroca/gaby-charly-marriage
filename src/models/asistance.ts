// Vendors
import { z } from "zod";

export const asistanceModel = z.object({
  adults: z.number().min(1).max(10),
  childrens: z.number().min(0).max(10),
  names: z.string().min(1).max(255),
  message: z.string().min(0).max(1000),
});

export type AsistanceModel = z.infer<typeof asistanceModel>;
