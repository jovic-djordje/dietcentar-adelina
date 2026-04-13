import { TbGymnastics } from "react-icons/tb";
import { TbHealthRecognition } from "react-icons/tb";
import { GrRestaurant } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import "./home.style.css";

const BannerSection = () => {
  const strips = [
    {
      id: 1,
      icon: <TbHealthRecognition className="banner-icon" />,
      text: "Zdravstvene ustanove",
    },
    {
      id: 2,
      icon: <TbGymnastics className="banner-icon" />,
      text: "Teretane i sportski kolektivi",
    },
    {
      id: 3,
      icon: <GrRestaurant className="banner-icon" />,
      text: "Restorani",
    },
    {
      id: 4,
      icon: <TbSchool className="banner-icon" />,
      text: "Edukativni sistemi",
    },

    {
      id: 5,
      icon: <IoBusinessOutline className="banner-icon" />,
      text: "Kompanije",
    },

    {
      id: 6,
      icon: <FaRegUser className="banner-icon" />,
      text: "Individualni klijenti",
    },
  ];

  return (
    <section className="banner">
      <div className="banner-holder">
        {/* Original */}
        <div className="banner-strip">
          {strips.map((strip) => (
            <div className="banner-text-holder" key={strip.id}>
              {strip.icon}
              <p>{strip.text}</p>
            </div>
          ))}
        </div>
        {/* Duplikat — za seamless loop */}
        <div className="banner-strip" aria-hidden="true">
          {strips.map((strip) => (
            <div className="banner-text-holder" key={`dup-${strip.id}`}>
              {strip.icon}
              <p>{strip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BannerSection;
