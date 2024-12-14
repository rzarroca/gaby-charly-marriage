// Assets
import wave from "@/public/wave.png";
// Types
import { PropsWithChildren } from "react";
// Utils
import { cn } from "lib";

export const CardSection = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLElement>>) => (
  <section
    style={{ backgroundImage: `url(${wave.src})` }}
    className={cn(
      "mx-auto grid w-[95%] rounded-lg border-8 border-double border-secondary bg-tertiary",
      className,
    )}
    {...props}
  >
    {children}
  </section>
);
