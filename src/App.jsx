import React from "react";
import BgMesh from "./components/BgMesh.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LiveTicker from "./components/LiveTicker.jsx"; // ◄ IMPORT TICKER
import FeaturesSection from "./components/FeaturesSection.jsx";
import CarbonCalculator from "./components/CarbonCalculator.jsx";
import ImpactLeaderboard from "./components/ImpactLeaderboard.jsx"; // ◄ IMPORT LEADERBOARD
import BusinessModel from "./components/BusinessModel.jsx";
import StrategySection from "./components/StrategySection.jsx";
import FinancialSection from "./components/FinancialSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-[#f2f5f0] min-h-screen relative overflow-x-hidden selection:bg-[#16a34a]/20">
      <BgMesh />
      <div className="relative z-10">
        <Navbar />
        <Hero />

        <LiveTicker />

        <FeaturesSection />
        <CarbonCalculator />

        <ImpactLeaderboard />

        <BusinessModel />
        <StrategySection />
        <FinancialSection />
        <Footer />
      </div>
    </div>
  );
}
