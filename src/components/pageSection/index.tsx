// Utils
import { cn } from "lib";

const PAGE_SECTION_STYLE = "grid gap-8 px-[5%] py-[5svh] relative";

export const PageSection = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <section className={cn(PAGE_SECTION_STYLE, className)} {...props}></section>
);
