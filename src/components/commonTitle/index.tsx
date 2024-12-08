import { PropsWithChildren } from "react";

export const CommonTitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-center-xl mx-auto max-w-sm">{children}</h2>
);
