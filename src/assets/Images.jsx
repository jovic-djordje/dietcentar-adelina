import logo from "./logo.webp";
import heroImage from "./hero-img.png";
import heroMobileImage from "./mobile-hero.png";

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

export { Logo, HeroImage, HeroMobileImage };
