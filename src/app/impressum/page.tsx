import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Süba Dragon Wohnbau GmbH — Anbieterkennzeichnung gemäß § 5 TMG, Handelsregister, Geschäftsführung, Erlaubnis nach § 34 i GewO und Aufsichtsbehörden.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/impressum" }
};

const UPDATED = "Mai 2026";

export default function ImpressumPage() {
  return (
    <LegalShell
      index="08"
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Anbieterkennzeichnung nach § 5 TMG sowie Angaben gemäß § 18 Abs. 2 MStV. Verantwortlich für sämtliche Inhalte dieser Website."
      updated={UPDATED}
    >
      <h2>
        <span className="num">01</span>Angaben gemäß § 5 TMG
      </h2>
      <dl>
        <dt>Firma</dt>
        <dd>Süba Dragon Wohnbau GmbH</dd>
        <dt>Anschrift</dt>
        <dd>
          <span className="placeholder">Straße &amp; Hausnummer</span>
          <br />
          <span className="placeholder">PLZ</span> <span className="placeholder">Mannheim</span>
          <br />
          Deutschland
        </dd>
        <dt>Telefon</dt>
        <dd>
          <a href="tel:+4962139993141">+49 621 3999 3141</a>
        </dd>
        <dt>E-Mail</dt>
        <dd>
          <a href="mailto:info@sueba-wohnbau.de">info@sueba-wohnbau.de</a>
        </dd>
        <dt>Internet</dt>
        <dd>
          <a href="https://sueba-dragon-wohnbau.de">sueba-dragon-wohnbau.de</a>
        </dd>
      </dl>

      <h2>
        <span className="num">02</span>Vertretungsberechtigte Geschäftsführung
      </h2>
      <p>
        <span className="placeholder">Vor- und Nachname Geschäftsführer:in</span>
      </p>

      <h2>
        <span className="num">03</span>Handelsregister
      </h2>
      <dl>
        <dt>Registergericht</dt>
        <dd>
          Amtsgericht <span className="placeholder">Mannheim</span>
        </dd>
        <dt>Registernummer</dt>
        <dd>
          HRB <span className="placeholder">000000</span>
        </dd>
      </dl>

      <h2>
        <span className="num">04</span>Umsatzsteuer-ID
      </h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
        <span className="placeholder">DE 000 000 000</span>
      </p>

      <h2>
        <span className="num">05</span>Berufsrechtliche Angaben
      </h2>
      <p>
        <strong>Tätigkeit:</strong> Vermittlung von Immobiliardarlehen für Verbraucher
        (Immobiliardarlehensvermittler:in i. S. v. § 34 i Abs. 1 Satz 1 GewO) sowie Vermittlung von
        Verbraucherdarlehen (Privat-/Ratenkrediten).
      </p>
      <h3>Erlaubnis nach § 34 i GewO</h3>
      <p>
        Erteilt durch:{" "}
        <span className="placeholder">Zuständige Industrie- und Handelskammer (z. B. IHK Rhein-Neckar)</span>
      </p>
      <p>
        Registrierungsnummer im Vermittlerregister:{" "}
        <span className="placeholder">D-W-XXX-XXXX-XX</span>
        <br />
        Einsehbar über{" "}
        <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer">
          vermittlerregister.info
        </a>{" "}
        (DIHK).
      </p>
      <p>
        Gesetzliche Berufsbezeichnung „Immobiliardarlehensvermittler" wurde verliehen in der
        Bundesrepublik Deutschland.
      </p>
      <h3>Maßgebliche berufsrechtliche Regelungen</h3>
      <ul>
        <li>§ 34 i Gewerbeordnung (GewO)</li>
        <li>Immobiliardarlehensvermittlungsverordnung (ImmVermV)</li>
        <li>Wohnimmobilienkreditrichtlinie (WoKri / RL 2014/17/EU)</li>
        <li>§§ 491 ff. Bürgerliches Gesetzbuch (BGB) — Verbraucherdarlehensvertrag</li>
        <li>Preisangabenverordnung (PAngV)</li>
        <li>Geldwäschegesetz (GwG)</li>
      </ul>
      <p>
        Einsehbar über{" "}
        <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer">
          gesetze-im-internet.de
        </a>
        .
      </p>

      <h2>
        <span className="num">06</span>Aufsichtsbehörde
      </h2>
      <p>
        Zuständige Aufsichtsbehörde gemäß § 34 i GewO:
        <br />
        <span className="placeholder">Industrie- und Handelskammer Rhein-Neckar</span>
        <br />
        <span className="placeholder">L 1, 2 · 68161 Mannheim</span>
      </p>

      <h3>Vermögensschadenhaftpflichtversicherung</h3>
      <p>
        Pflichtversicherung gemäß § 34 i Abs. 2 Nr. 3 GewO:
        <br />
        <strong>Versicherer:</strong> <span className="placeholder">Name des Versicherers</span>
        <br />
        <strong>Geltungsraum:</strong> Deutschland / EU
      </p>

      <h2>
        <span className="num">07</span>Verantwortlich für den Inhalt
      </h2>
      <p>
        Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV (vormals § 55 Abs. 2 RStV):
      </p>
      <p>
        <span className="placeholder">Vor- und Nachname</span>
        <br />
        Anschrift wie oben.
      </p>

      <h2>
        <span className="num">08</span>EU-Streitschlichtung
      </h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>
      <p>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>
        <span className="num">09</span>Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>
        <span className="num">10</span>Haftung für Inhalte
      </h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
        der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>
        <span className="num">11</span>Haftung für Links
      </h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
        der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar.
      </p>

      <h2>
        <span className="num">12</span>Urheberrecht
      </h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>

      <div className="legal-card is-info">
        <p>
          <strong>Hinweis:</strong> Mit{" "}
          <span className="placeholder">platzhalter</span> markierte Felder sind durch die finalen
          Unternehmensdaten zu ersetzen, bevor die Seite live geht.
        </p>
      </div>
    </LegalShell>
  );
}
