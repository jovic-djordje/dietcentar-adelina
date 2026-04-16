import "./center.style.css";

const ExpertiseSection = () => {
  const expertises = [
    {
      id: 1,
      num: "01",
      title: "Medicinska nutricionistička terapija",
      text: "Klinički dokazani planovi ishrane za različita stanja",
    },
    {
      id: 2,
      num: "02",
      title: "Žensko zdravlje tijekom trudnoće i nakon poroda",
      text: "Specijalizirana podrška za sve faze ženskog zdravlja",
    },
    {
      id: 3,
      num: "03",
      title: "Edukacija i savjetovanje za dugoročne promjene",
      text: "Učite kako pravilna ishrana mijenja vaš kvalitet života",
    },

    {
      id: 4,
      num: "04",
      title: "Kontrola tjelesne mase i metaboličko zdravlje",
      text: "Dugoročne strategije za održavanje zdrave tjelesne mase",
    },
    {
      id: "5",
      num: "05",
      title: "Nutritivna podrška za mentalno zdravlje",
      text: "Ishrana kao alat za ublažavanje anksioznosti i stresa",
    },
    {
      id: "6",
      num: "06",
      title: "Online konsultacije bez granica",
      text: "Gdje god se nalazili, možete računati na našu podršku",
    },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-section-holder features-section-holder">
        <div className="expertise-section-text-holder features-section-text-holder">
          <h4>Stručnost</h4>
          <h2 className="expertise-section-title features-section-title">
            Na koji način vas podržavamo
          </h2>
          <p className="expertise-section-text features-section-text">
            Pored kliničkog rada, Centar pruža i stručnu podršku u svim ključnim
            oblastima
          </p>
        </div>

        <div className="expertise-section-carts-holder">
          {expertises.map((expertise) => (
            <div className="expertise-cart" key={expertise.id}>
              <div className="expertise-cart-width ">
                <span>{expertise.num}</span>
                <div className="exeprtise-cart-text-holder">
                  <h3 className="expertise-cart-title">{expertise.title}</h3>
                  <p className="expertise-cart-text">{expertise.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
