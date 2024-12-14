// Types
import { PropsWithChildren } from "react";
// Utils
import { cn } from "lib";

const PARAGRAPH_STYLE = "italic";

export const Paragraph = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>) => (
  <p className={cn(PARAGRAPH_STYLE, className)} {...props}>
    {children}
  </p>
);
