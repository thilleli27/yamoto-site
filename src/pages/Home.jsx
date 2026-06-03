// Page principale du site — one page
// On ajoute les composants au fur et à mesure

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Yamoto from "../components/Yamoto";
import Tracklist from "../components/Tracklist";
import Makala from "../components/Makala";
import Tournee from "../components/Tournee";
import Plateformes from "../components/Plateformes";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}

export default Home;