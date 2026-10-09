import logo from "./logo.webp";
import logoLight from "./logo2 (1).webp";
import footerLogo from "./logo2.webp";
import heroImage from "./hero-img (2).webp";
import heroMobileImage from "./mobile-hero (1).webp";
import aboutSectionImage from "./about-sec-img.webp";
import testimonialImgOne from "./testimonial-img.webp";
import testimonialImgTwo from "./testimonial-img-two.webp";
import testimonialImgThree from "./testimonial-img-three.webp";
import testimonialImgFour from "./testimonial-img-four.webp";
import testimonialImgFive from "./testimonial-img-five.webp";
import testimonialImgSix from "./testimonial-img-six.webp";
import ctaImg from "./cta-img.webp";
import missionImg from "./mission-img.webp";
import featuresImg from "./features-img.webp";
import wave from "./wave-haikei.svg";
import waveLight from "./wave-light.svg";
import storyImg from "./story-section-img.webp";

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
  return (
    <img
      src={heroImage}
      alt="Adelina Tabaković drži zelenu jabuku ispred logotipa Centra za nutricionizam i dijetetiku"
      className={className}
      width={1365}
      height={768}
      fetchPriority="high"
      decoding="async"
    />
  );
};

const HeroMobileImage = ({ className }) => {
  return (
    <img
      src={heroMobileImage}
      alt="Adelina Tabaković drži zelenu jabuku ispred logotipa Centra za nutricionizam i dijetetiku"
      className={className}
      width={704}
      height={1534}
      fetchPriority="high"
      decoding="async"
    />
  );
};

const AboutSectionImage = ({ className }) => {
  return (
    <img
      src={aboutSectionImage}
      alt="Adelina Tabaković sjedi u uredu centra za nutricionizam i dijetetiku"
      className={className}
      width={4000}
      height={2667}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgOne = ({ className }) => {
  return (
    <img
      src={testimonialImgOne}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgTwo = ({ className }) => {
  return (
    <img
      src={testimonialImgTwo}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgThree = ({ className }) => {
  return (
    <img
      src={testimonialImgThree}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgFour = ({ className }) => {
  return (
    <img
      src={testimonialImgFour}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgFive = ({ className }) => {
  return (
    <img
      src={testimonialImgFive}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const TestimonialImgSix = ({ className }) => {
  return (
    <img
      src={testimonialImgSix}
      alt=""
      className={className}
      width={45}
      height={45}
      loading="lazy"
      decoding="async"
    />
  );
};

const CtaImg = ({ className }) => {
  return (
    <img
      src={ctaImg}
      alt="Adelina Tabaković stoji sa prekrštenim rukama ispred brendiranog pozadinskog vizuala sa logotipom jabuke"
      className={className}
      width={1289}
      height={1859}
      loading="lazy"
      decoding="async"
    />
  );
};

const MissionImg = ({ className }) => (
  <img
    src={missionImg}
    alt="Adelina Tabaković radi u uredu centra za nutricionizam i dijetetiku"
    className={className}
    width={1290}
    height={709}
    loading="lazy"
    decoding="async"
  />
);

const FeaturesImg = ({ className }) => {
  return (
    <img
      src={featuresImg}
      alt="Adelina Tabaković tokom konsultacije sa klijentom."
      className={className}
    />
  );
};

const Wave = ({ className }) => {
  return <img src={wave} alt="" aria-hidden="true" className={className} />;
};

const WaveLight = ({ className }) => {
  return (
    <img src={waveLight} alt="" aria-hidden="true" className={className} />
  );
};

const StoryImg = ({ className }) => {
  return (
    <img
      src={storyImg}
      alt="Adelina Tabaković stoji ispred zida sa logotipom centra."
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
  Wave,
  WaveLight,
  StoryImg,
};
