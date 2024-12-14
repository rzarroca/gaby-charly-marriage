// Vendors
import Image from "next/image";
// Assets
import world from "assets/vectors/world.svg?url";
// Utils
import { cn } from "lib";

export const WorldImage = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-disabled="true"
    className={cn("absolute mt-[8dvh] w-[100vw] overflow-clip", className)}
    {...props}
  >
    <div className="animate-cross flex">
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
      />
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
      />
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
      />
    </div>
  </div>
);
