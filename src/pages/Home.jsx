// Page principale du site — one page
// Contient toutes les sections dans l'ordre

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Yamoto from "../components/Yamoto";
import Tracklist from "../components/Tracklist";
import Makala from "../components/Makala";
import Tournee from "../components/Tournee";
import Plateformes from "../components/Plateformes";
import Footer from "../components/Footer";

// CSS global du site
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
      <Footer />
    </div>
  );
}

export default Home;