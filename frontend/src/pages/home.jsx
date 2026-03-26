import Header from "../components/header";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Features from "../components/features";
import Steps from "../components/steps";
import Services from "../components/services";
import CTA from "../components/CTA";

function Home({ onOpenDashboard }) {
  return (
    <div className="page">
      <Header onOpenDashboard={onOpenDashboard} />
      <Hero onOpenDashboard={onOpenDashboard} />
      <Metrics />
      <Features />
      <Steps />
      <Services />
      <CTA onOpenDashboard={onOpenDashboard} />
    </div>
  );
}

export default Home;