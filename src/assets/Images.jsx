import logo from "./logo.webp";
import heroImage from "./hero-img.png";
import heroMobileImage from "./mobile-hero.png";
import aboutSectionImage from "./about-sec-img.jpeg";

const Logo = ({ className }) => {
  return <img src={logo} alt="diet centar logo" className={className} />;
};

const HeroImage = ({ className }) => {
  return <img src={heroImage} alt="hero image" className={className} />;
};

const HeroMobileImage = ({ className }) => {
  return (
    <img src={heroMobileImage} alt="hero mobile image" className={className} />
  );
};

const AboutSectionImage = ({ className }) => {
  return (
    <img src={aboutSectionImage} alt="image of Adelina" className={className} />
  );
};

export { Logo, HeroImage, HeroMobileImage, AboutSectionImage };
