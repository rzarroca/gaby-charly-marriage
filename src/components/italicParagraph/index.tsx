// Vendors
import { PropsWithChildren } from "react";

export const ItalicParagraph = ({ children }: PropsWithChildren) => (
  <p className="px-[10dvw] font-curly text-3xl leading-snug md:text-4xl">
    {children}
  </p>
);
