// Vendors
import { Toaster } from "react-hot-toast";
// Components
import { AudioPlayer } from "./components/audioPlayer";
import { Confirmation } from "./components/confirmation";
import { Countdown } from "./components/countdown";
import { DressCode } from "./components/dressCode";
import { Footer } from "./components/footer";
import { Gift } from "./components/gitf";
import { Header } from "./components/header";
import { HotelInfo } from "./components/hotelInfo";
import { Invitation } from "./components/invitation";
import { WeddingInfo } from "./components/weddingInfo";

export default function Home() {
  return (
    <main className="w-dvw max-w-3xl overflow-clip bg-secondary text-center">
      <AudioPlayer />
      <Header />
      <Invitation />
      <WeddingInfo />
      <HotelInfo />
      <Confirmation />
      <Gift />
      <Countdown />
      <DressCode />
      <Footer />
      <Toaster />
    </main>
  );
}
