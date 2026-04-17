import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./offers.style.css";
import { WaveLight } from "../assets/Images";

const services = [
  {
    id: 1,
    tab: "Analiza tijela",
    title: "Analiza sastava tijela — Tanita analizator",
    description:
      "Analiza sastava tijela putem naprednog Tanita analizatora omogućava precizan uvid u stvarno stanje organizma i predstavlja osnovu svakog individualnog pristupa.",
    items: [
      "Tjelesna masa, masno tkivo, mišićna i skeletna masa",
      "Količina vode u organizmu, koštana masa i proteini",
      "Visceralna mast i metabolička starost",
      "Bazalni metabolizam (BMR) i BMI",
      "Fazni ugao – pokazatelj stanja ćelija",
    ],
    footer: "Temelj za izradu individualnih planova i praćenje napretka",
  },
  {
    id: 2,
    tab: "Konsultacije",
    title: "Nutricionističke konsultacije i savjetovanje",
    description:
      "Stručno vođeno savjetovanje u potpunosti prilagođeno osobi, njenom tijelu i životnom ritmu — uživo ili online.",
    items: [
      "Detaljna anamneza i procjena općeg stanja",
      "Analiza zdravstvenog stanja i tumačenje nalaza",
      "Procjena prehrambenih i životnih navika",
      "Analiza sastava tijela na Tanita analizatoru",
      "Individualne preporuke i izračun nutritivnih potreba",
    ],
    footer: "Dostupno uživo i online — prilagođeno vašem rasporedu",
  },
  {
    id: 3,
    tab: "Smjernice",
    title: "Smjernice za ishranu",
    description:
      "Praktičan i individualno kreiran vodič koji olakšava svakodnevnu ishranu uz kontinuiranu stručnu podršku i motivaciju.",
    items: [
      "Preventivna i terapijska ishrana",
      "Sedmične ili dogovorene kontrole napretka",
      "Kontinuirana analiza sastava tijela tokom procesa",
      "Edukacija i promjena prehrambenih navika",
      "Stručna podrška i motivacija",
    ],
    footer: "Dugoročna promjena navika uz stručnu podršku",
  },
  {
    id: 4,
    tab: "Planovi ishrane",
    title: "Individualni planovi ishrane",
    description:
      "Srce mog rada. Planovi se izrađuju u potpunosti prema vašim ciljevima — gubitak ili dobijanje mase, ili dijetoterapija kod zdravstvenih stanja.",
    items: [
      "Planovi za 7 / 14 / 30 / 90 dana",
      "Pristup mobilnoj aplikaciji s planom, receptima i listom za kupovinu",
      "Sedmične kontrole i analiza napretka na Tanita uređaju",
      "Fleksibilno prilagođavanje plana svake sedmice",
      "Sistematski pristup — plan postaje precizniji iz sedmice u sedmicu",
    ],
    footer: "Plan koji se razvija zajedno s vama",
  },
];

const OfferPlan = () => {
  const [activeId, setActiveId] = useState(1);
  const active = services.find((s) => s.id === activeId);

  return (
    <section className="offers-section">
      <div className="offers-section-holder">
        {/* Tabovi */}
        <div className="offers-tabs">
          {services.map((s) => (
            <button
              key={s.id}
              className={`offers-tab ${activeId === s.id ? "offers-tab--active" : ""}`}
              onClick={() => setActiveId(s.id)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Sadržaj */}
        <div className="offers-content">
          <div className="offer-content-width">
            <div className="offers-content-left">
              <h3 className="offers-content-title">{active.title}</h3>
              <p className="offers-content-desc">{active.description}</p>
              <ul className="offers-content-list">
                {active.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="offers-content-footer">{active.footer}</p>
            </div>

            <div className="offers-content-right">
              <button className="hero-section-btn offer-section-btn">
                Zakaži besplatnu konsultaciju
                <div className="hero-btn-icon-holder offer-btn-icon-holder">
                  <HiArrowNarrowRight className="hero-btn-icon offer-btn-icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPlan;
