// Components
import { Passport } from "./components/passport";
import { Invitation } from "./components/invitation";

export default function Home() {
  return (
    <main className="bg-secondary max-w-3xl flex text-center flex-col items-center shadow-xl">
      <Passport />
      <Invitation />

      <section>
        <h2>Pasaporte a nuestra boda</h2>
        <dl>
          <dt>Fecha</dt>
          <dd>Semana del 29 de noviembre 2025 al 6 de diciembre </dd>
          <dt>Destino</dt>
          <dd>México, Playa del Carmen</dd>
          <dt>Ceremonia</dt>
          <dd>Hotel Sandos Playacar</dd>
          <dt>No olvidarse</dt>
          <dd>Mucha buena onda y ganas de festejar</dd>
        </dl>
        <p>Carlos & Gabriela</p>
      </section>
    </main>
  );
}
