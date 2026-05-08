import CtaSection from "../home/CtaSection";
import AboutHero from "./AboutHero";
import FoundationSection from "./FoundationSection";
import Story from "./Story";
import TimelineSection from "./TimelineSection";

const About = () => {
  return (
    <>
      <AboutHero />
      <Story />
      <TimelineSection />
      <FoundationSection />
      <CtaSection />
    </>
  );
};

export default About;
