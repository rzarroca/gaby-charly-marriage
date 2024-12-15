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
    className={cn("absolute mt-[8svh] w-[100vw] overflow-clip", className)}
    {...props}
  >
    <div className="flex animate-cross">
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
        priority={true}
      />
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
        priority={true}
      />
      <Image
        src={world}
        alt=""
        aria-hidden
        role="presentation"
        className="h-auto w-[375px]"
        priority={true}
      />
    </div>
  </div>
);
