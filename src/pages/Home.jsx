import Hero from "../components/home/Hero";
import TrustMetrics from "../components/home/TrustMetrics";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedPracticeAreas from "../components/home/FeaturedPracticeAreas";
import Leadership from "../components/home/Leadership";
import Testimonials from "../components/home/Testimonials";
import Industries from "../components/home/Industries";
import Insights from "../components/home/Insights";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <WhyChooseUs />
      <FeaturedPracticeAreas />
      <Leadership />
      <Testimonials />
      <Industries />
      <Insights />
      <CTABanner />
    </>
  );
}
