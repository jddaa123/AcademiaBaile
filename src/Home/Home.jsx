import "./Home.css";
import { Cartas } from "../cartas/cartas";
import { Footer } from "../footers/footer";
import { Header1 } from "../headers/header1";
export function Home() {
  return (
    <>
      <Header1></Header1>

      <Cartas></Cartas>

      <Footer></Footer>
    </>
  );
}
