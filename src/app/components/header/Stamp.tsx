// Vendors
import Image from "next/image";
// Assets
import gycStampUrl from "assets/vectors/gyc-stamp.svg?url";
import gycStampOutUrl from "assets/vectors/gyc-stamp-out.svg?url";
import gycStampDotsUrl from "assets/vectors/gyc-stamp-dots.svg?url";
// Styles
import styles from "./stamp.module.css";
// Utils
import { cn } from "lib";

export const Stamp = () => (
  <div role="presentation" className={styles.stack}>
    <Image
      src={gycStampUrl}
      alt=""
      aria-hidden
      className={styles.stackItem}
      priority={true}
    />
    <Image
      src={gycStampOutUrl}
      alt=""
      aria-hidden
      className={cn("animate-spin-slow-r", styles.stackItem)}
      priority={true}
    />
    <Image
      src={gycStampDotsUrl}
      alt=""
      aria-hidden
      className={cn("animate-spin-slow", styles.stackItem)}
      priority={true}
    />
  </div>
);
