// Components
import { Confirmation } from "./components/confirmation";
import { Countdown } from "./components/countdown";
import { DressCode } from "./components/dressCode";
import { Gift } from "./components/gitf";
import { HotelInfo } from "./components/hotelInfo";
import { Invitation } from "./components/invitation";
import { Header } from "./components/header";
import { WeddingInfo } from "./components/weddingInfo";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="grid max-w-3xl bg-secondary text-center shadow-xl">
      <Header />
      <Invitation />
      <WeddingInfo />
      <HotelInfo />
      <Confirmation />
      <Gift />
      <Countdown />
      <DressCode />
      <Footer />
    </main>
  );
}
