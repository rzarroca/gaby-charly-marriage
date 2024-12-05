// Components
import { Passport } from "./components/passport";
import { Invitation } from "./components/invitation";
import { WeddingInfo } from "./components/weddingInfo";
import { HotelInfo } from "./components/hotelInfo";

export default function Home() {
  return (
    <main className="bg-secondary max-w-3xl flex text-center flex-col items-center shadow-xl">
      <Passport />
      <Invitation />
      <WeddingInfo />
      <HotelInfo />
    </main>
  );
}
