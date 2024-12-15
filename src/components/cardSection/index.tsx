// Vendors
import Image from "next/image";
// Assets
import wave from "@/public/wave.png";
// Types
import { ElementType, PropsWithChildren } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
// Utils
import { cn } from "lib";

interface CardSectionProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  as?: ElementType;
  image?: {
    src: string | StaticImport;
    alt?: string;
  };
  title: string;
  footer?: string;
}

export const CardSection = ({
  as: Component = "section",
  image,
  title,
  children,
  footer,
  className,
  ...props
}: CardSectionProps) => (
  <Component
    style={{ backgroundImage: `url(${wave.src})` }}
    className={cn(
      "mx-auto grid w-[95%] rounded-lg border-8 border-double border-secondary bg-white",
      className,
    )}
    {...props}
  >
    {image && (
      <Image src={image?.src} alt={image?.alt ?? ""} className="shadow-lg" />
    )}
    <h2 className="mx-auto w-[95%] border-b-2 border-b-secondary py-[2dvh] text-xl text-tertiary md:text-3xl">
      {title}
    </h2>
    {children}
    {footer && (
      <p className="border-t-2 border-t-secondary px-6 py-[2dvh] text-xl text-tertiary md:text-3xl">
        {footer}
      </p>
    )}
  </Component>
);
