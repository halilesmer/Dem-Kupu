import React, {useContext} from "react";
import logo from "./assets/DemKupuLogo.png";
import Footer from "./Footer";
import "./stylesImpressum.css";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext.js";

const Impressum = () => {
  const theme = useContext(AppContext);

  return (
    <main className={
      theme.theme === "dark"
          ? "dark Main-Impressum"
          : "Main-Impressum light"
      }
    >
      <div>
        <Link to="/">
          <img src={logo} alt="demküpü-Logo" />
        </Link>
        <div>
          <h1 id="header">Impressum</h1>
        </div>
        <div>
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Pederli Lebensmittel und Haushaltswaren Einzel- und Großhandel GmbH
            <br></br> Tauentziehenstr. 16 <br></br>10789 Berlin
          </p>
          <p>
            Geschäftsführer: <br></br> Yavuz Pederlioglu
          </p>
          <p>Telefon: +49 (0) 176 2023 9047</p>
          <p>
            {" "}
            E-Mail:{" "}
            <a
              href="mailto:info@pederli.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@pederli.de
            </a>
          </p>
          <p>
            Internet:{" "}
            <a href="www.pederli.de" rel="noopener noreferrer">
              www.pederli.de
            </a>
          </p>
        </div>
        <div>
          <p>
            Handelsregister: HRB 194902 B <br></br>
            Amtsgericht Berlin (Charlottenburg)
          </p>
          <p>Umsatzsteuer-ID: DE 317417475</p>
        </div>
        <div>
          <h5>Haftung für Inhalte</h5>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <br></br>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </div>
        <div>
          <h5>Haftung für Links</h5>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <br></br>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>
        <div>
          <h5>Verbraucher­streit­beilegung/Schlichtungs­stelle</h5>
          <p>
            Streitschlichtung, Art. 14 Abs. 1 ODR-Verordnung („OS-Plattform“)
            Der Verkäufer ist verpflichtet, Verbraucher auf die Europäische
            Online-Plattform zur außergerichtlichen Beilegung von
            Streitigkeiten, die zwischen Käufer und Verkäufer unter anderem aus
            Online-Kaufverträgen erwachsen, hinzuweisen.
            <p>
              {" "}
              Die Europäische Online-Streitbeilegungs-Plattform ist unter
              folgendem{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>{" "}
              zu erreichen:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online-Streitbeilegung
              </a>
            </p>
            Teilnahme an Alternativer Streitbeilegung („AS“), § 36 VSBG Der
            Verkäufer ist weder bereit noch verpflichtet, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
        <div>
          <h5>Urheberrecht</h5>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <br></br>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p>Quelle: https://www.e-recht24.de</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Impressum;
