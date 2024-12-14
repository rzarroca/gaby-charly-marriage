import { PropsWithChildren } from "react";

export const CommonTitle = ({ children }: PropsWithChildren) => (
  <h2 className="mx-auto max-w-sm text-center font-curly text-4xl md:text-5xl">
    {children}
  </h2>
);
