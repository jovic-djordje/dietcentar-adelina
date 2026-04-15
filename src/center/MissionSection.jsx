import { MissionImg } from "../assets/Images";
import "./center.style.css";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-section-holder">
        <MissionImg className="mission-img" />
        <div className="mission-section-text-holder">
          <h2 className="mission-section-title">
            Nauka, iskustvo i vaše jedinstvene potrebe
          </h2>
          <p className="mission-section-text">
            Centar je osnovan s ciljem da pruži stručnu, individualnu i
            dugoročno održivu podršku osobama koje žele unaprijediti zdravlje
            kroz pravilnu ishranu. Pristup je zasnovan isključivo na naučnim
            dokazima, kliničkoj praksi i individualnoj procjeni.
          </p>

          <div className="mission-section-approach-text-holder">
            <div className="approach">
              <h3 className="approach-title">Naučni pristup</h3>
              <p className="approach-text mission-section-text">
                Svaki plan ishrane je izgrađen na kliničkim dokazima i
                prilagođen vašim jedinstvenim potrebama.
              </p>
            </div>

            <div className="results approach">
              <h3 className="results-title approach-title">Rezultati</h3>
              <p className="results-text mission-section-text approach-text">
                Strukturirane konsultacije i follow-up sistemi osiguravaju
                održive promjene u vašem zdravlju.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
