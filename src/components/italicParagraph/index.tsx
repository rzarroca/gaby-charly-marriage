// Vendors
import { PropsWithChildren } from "react";

export const ItalicParagraph = ({ children }: PropsWithChildren) => (
  <p className="px-[10dvw] font-curly text-2xl leading-snug md:text-3xl">
    {children}
  </p>
);
