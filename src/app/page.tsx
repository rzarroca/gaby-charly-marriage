// Components
import { Confirmation } from "./components/confirmation";
import { Countdown } from "./components/countdown";
import { Gift } from "./components/gitf";
import { HotelInfo } from "./components/hotelInfo";
import { Invitation } from "./components/invitation";
import { Passport } from "./components/passport";
import { WeddingInfo } from "./components/weddingInfo";

export default function Home() {
  return (
    <main className="flex max-w-3xl flex-col items-center bg-secondary text-center shadow-xl">
      <Passport />
      <Invitation />
      <WeddingInfo />
      <HotelInfo />
      <Confirmation />
      <Gift />
      <Countdown />
    </main>
  );
}
