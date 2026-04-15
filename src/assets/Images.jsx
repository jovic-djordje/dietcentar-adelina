import logo from "./logo.webp";
import logoLight from "./logo2.png";
import footerLogo from "./logo2.webp";
import heroImage from "./hero-img.png";
import heroMobileImage from "./mobile-hero.png";
import aboutSectionImage from "./about-sec-img.jpeg";
import testimonialImgOne from "./testimonial-img.png";
import testimonialImgTwo from "./testimonial-img-two.png";
import testimonialImgThree from "./testimonial-img-three.png";
import testimonialImgFour from "./testimonial-img-four.png";
import testimonialImgFive from "./testimonial-img-five.png";
import testimonialImgSix from "./testimonial-img-six.png";
import ctaImg from "./cta-img.png";
import missionImg from "./mission-img.jpeg";
import featuresImg from "./features-img.jpg";

const Logo = ({ className }) => {
  return <img src={logo} alt="diet centar logo" className={className} />;
};

const LogoLight = ({ className }) => {
  return <img src={logoLight} alt="diet centar logo" className={className} />;
};

const FooterLogo = ({ className }) => {
  return <img src={footerLogo} alt="diet centar logo" className={className} />;
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

const TestimonialImgOne = ({ className }) => {
  return (
    <img
      src={testimonialImgOne}
      alt="testimonial image"
      className={className}
    />
  );
};

const TestimonialImgTwo = ({ className }) => {
  return (
    <img
      src={testimonialImgTwo}
      alt="testimonial image"
      className={className}
    />
  );
};

const TestimonialImgThree = ({ className }) => {
  return (
    <img
      src={testimonialImgThree}
      alt="testimonial image"
      className={className}
    />
  );
};

const TestimonialImgFour = ({ className }) => {
  return (
    <img
      src={testimonialImgFour}
      alt="testimonial image"
      className={className}
    />
  );
};

const TestimonialImgFive = ({ className }) => {
  return (
    <img
      src={testimonialImgFive}
      alt="testimonial image"
      className={className}
    />
  );
};

const TestimonialImgSix = ({ className }) => {
  return (
    <img
      src={testimonialImgSix}
      alt="testimonial image"
      className={className}
    />
  );
};

const CtaImg = ({ className }) => {
  return (
    <img
      src={ctaImg}
      alt="slika Adeline i  drzi ciniju sa vocem"
      className={className}
    />
  );
};

const MissionImg = ({ className }) => {
  return (
    <img
      src={missionImg}
      alt="photo of Adelina while working"
      className={className}
    />
  );
};

const FeaturesImg = ({ className }) => {
  return (
    <img
      src={featuresImg}
      alt="photo of adelina while doing testing on patience"
      className={className}
    />
  );
};

export {
  Logo,
  LogoLight,
  FooterLogo,
  HeroImage,
  HeroMobileImage,
  AboutSectionImage,
  TestimonialImgOne,
  TestimonialImgTwo,
  TestimonialImgThree,
  TestimonialImgFour,
  TestimonialImgFive,
  TestimonialImgSix,
  CtaImg,
  MissionImg,
  FeaturesImg,
};
