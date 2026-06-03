// Page principale du site — one page
// On ajoute les composants au fur et à mesure

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Yamoto from "../components/Yamoto";
import Tracklist from "../components/Tracklist";
import Makala from "../components/Makala";
import Tournee from "../components/Tournee";
import Plateformes from "../components/Plateformes";
import Blog from "../components/Blog";
import "../styles/global.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Yamoto />
      <Tracklist />
      <Makala />
      <Tournee />
      <Plateformes />
      <Blog />
    </div>
  );
}

export default Home;