import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollectin from "../components/LatestCollectin";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollectin />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
