import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Süba Dragon Wohnbau GmbH gemäß DSGVO. Informationen zur Verarbeitung personenbezogener Daten beim Besuch unserer Website und beim Kontaktformular.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/datenschutz" }
};

const UPDATED = "Mai 2026";

export default function DatenschutzPage() {
  return (
    <LegalShell
      index="09"
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      intro="Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Nachfolgend informieren wir Sie über Art, Umfang und Zweck der Erhebung sowie die Verwendung personenbezogener Daten gemäß DSGVO."
      updated={UPDATED}
    >
      <h2>
        <span className="num">01</span>Verantwortlicher
      </h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung (DSGVO):
      </p>
      <dl>
        <dt>Firma</dt>
        <dd>Süba Dragon Wohnbau GmbH</dd>
        <dt>Anschrift</dt>
        <dd>
          <span className="placeholder">Straße &amp; Hausnummer</span>
          <br />
          <span className="placeholder">PLZ</span> Mannheim, Deutschland
        </dd>
        <dt>Geschäftsführung</dt>
        <dd>
          <span className="placeholder">Vor- und Nachname</span>
        </dd>
        <dt>E-Mail</dt>
        <dd>
          <a href="mailto:info@sueba-wohnbau.de">info@sueba-wohnbau.de</a>
        </dd>
        <dt>Telefon</dt>
        <dd>
          <a href="tel:+4962139993141">+49 621 3999 3141</a>
        </dd>
      </dl>

      <h2>
        <span className="num">02</span>Datenschutzbeauftragte:r
      </h2>
      <p>
        Eine Pflicht zur Bestellung eines Datenschutzbeauftragten besteht für unser Unternehmen
        derzeit nicht. Bei Fragen rund um den Datenschutz wenden Sie sich bitte an die unter Ziffer 01
        genannte Adresse mit dem Betreff <strong>„Datenschutz"</strong>.
      </p>

      <h2>
        <span className="num">03</span>Allgemeine Hinweise zur Datenverarbeitung
      </h2>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer:innen grundsätzlich nur, soweit dies zur
        Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich
        ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung
        (Art. 6 Abs. 1 lit. a DSGVO) oder auf Grundlage einer der weiteren gesetzlichen Erlaubnistatbestände
        (insb. Art. 6 Abs. 1 lit. b, c, f DSGVO).
      </p>

      <h2>
        <span className="num">04</span>Bereitstellung der Website &amp; Server-Logfiles
      </h2>
      <p>
        Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen
        vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
      </p>
      <ul>
        <li>IP-Adresse (gekürzt) des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp, Sprache und Browser-Version</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer-URL (zuvor besuchte Seite)</li>
        <li>Übertragene Datenmenge</li>
      </ul>
      <p>
        Die Daten werden in den Logfiles unseres Hosting-Anbieters gespeichert. Eine Speicherung dieser
        Daten zusammen mit anderen personenbezogenen Daten findet nicht statt. Die Verarbeitung erfolgt
        zur Wahrung berechtigter Interessen (Sicherheit, Stabilität, Funktionsfähigkeit) gem.{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Logfiles werden nach{" "}
        <span className="placeholder">7</span> Tagen automatisch gelöscht.
      </p>

      <h2>
        <span className="num">05</span>Hosting
      </h2>
      <p>
        Unsere Website wird gehostet bei <span className="placeholder">Hosting-Anbieter, z. B. Vercel Inc.</span>.
        Bei Aufruf der Website werden technische Verbindungsdaten an den Hoster übermittelt. Mit dem
        Anbieter besteht ein Auftragsverarbeitungsvertrag (AVV) gem. Art. 28 DSGVO.
      </p>

      <h2>
        <span className="num">06</span>Kontaktaufnahme &amp; Konditions-Check-Formular
      </h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail / Telefon kontaktieren, werden Ihre Angaben
        zur Bearbeitung der Finanzierungsanfrage und für den Fall von Anschlussfragen gespeichert.
      </p>
      <h3>Erhobene Daten</h3>
      <ul>
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Gewünschte Darlehenssumme &amp; monatliche Wunschrate (freiwillig)</li>
        <li>Vorhaben (Erstfinanzierung, Anschlussfinanzierung, Forward, Modernisierung, Privatkredit)</li>
        <li>Beschäftigungsverhältnis &amp; Bonitätsindikation (freiwillig)</li>
        <li>Inhalt Ihrer Nachricht</li>
      </ul>
      <h3>Zweck</h3>
      <p>
        Bearbeitung Ihrer Finanzierungs- bzw. Kreditanfrage, Vorbereitung und Durchführung des
        unverbindlichen Erstgesprächs, Erstellung einer ersten Konditionsindikation
        („Konditions-Check") und ggf. Anfrage bei finanzierenden Banken nach Ihrer ausdrücklichen
        Freigabe.
      </p>
      <h3>Rechtsgrundlage</h3>
      <p>
        <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (vorvertragliche Maßnahmen),{" "}
        <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> (Einwilligung über die Checkbox), bei Bonitäts-
        und Bankenanfragen zusätzlich <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> i. V. m.
        gewerberechtlichen Pflichten nach § 34 i GewO.
      </p>
      <h3>Speicherdauer</h3>
      <p>
        Wir löschen Ihre Anfrage, sobald sie nicht mehr erforderlich ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Bei vermittelten Darlehensverträgen gelten
        handels- und steuerrechtliche Aufbewahrungsfristen (regelmäßig 6 bzw. 10 Jahre, §§ 257 HGB,
        147 AO) sowie die Dokumentationspflichten der ImmVermV (5 Jahre).
      </p>

      <h2>
        <span className="num">07</span>Weitergabe an Dritte
      </h2>
      <p>
        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten
        Zwecken findet nicht statt. Wir geben Ihre personenbezogenen Daten nur weiter, wenn:
      </p>
      <ul>
        <li>Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
        <li>
          die Weitergabe zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO) — etwa
          an finanzierende Banken, Sparkassen, Versicherer, Bausparkassen oder die KfW
          Bankengruppe im Rahmen der Finanzierungsanfrage,
        </li>
        <li>
          eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO) — z. B. nach Geldwäschegesetz,
        </li>
        <li>
          die Weitergabe zur Wahrung berechtigter Interessen zulässig ist (Art. 6 Abs. 1 lit. f DSGVO).
        </li>
      </ul>

      <h3>Bonitäts- und Schufa-Auskünfte</h3>
      <p>
        Im Rahmen der Vermittlung von Verbraucher- und Immobiliardarlehen kann es erforderlich sein,
        bei Auskunfteien (z. B. SCHUFA Holding AG, CRIF GmbH, infoscore Consumer Data GmbH) Bonitäts-
        und Identifikationsauskünfte einzuholen. Dies erfolgt ausschließlich nach Ihrer ausdrücklichen
        Einwilligung. Über die Datenverarbeitung der jeweiligen Auskunftei werden Sie vor Erteilung
        der Einwilligung gesondert informiert.
      </p>

      <h2>
        <span className="num">08</span>Cookies
      </h2>
      <p>
        Unsere Website verwendet derzeit ausschließlich technisch notwendige Cookies, die für den
        Betrieb der Website erforderlich sind. Diese werden auf Grundlage von{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> bzw. § 25 Abs. 2 Nr. 2 TTDSG gesetzt. Eine Einwilligung
        ist hierfür nicht erforderlich.
      </p>
      <p>
        Falls in Zukunft optionale Cookies (z. B. Analyse, Marketing) eingesetzt werden, holen wir vor
        der Speicherung Ihre ausdrückliche Einwilligung über ein Consent-Tool ein.
      </p>

      <h2>
        <span className="num">09</span>Externe Inhalte (Schriftarten, Bilder)
      </h2>
      <h3>Google Fonts (selbst-gehostet bzw. via next/font)</h3>
      <p>
        Diese Website nutzt zur einheitlichen Darstellung von Schriftarten Web-Fonts (Inter, Instrument
        Serif, JetBrains Mono). Diese werden über das Next.js Font-Module ausgeliefert und{" "}
        <strong>lokal gehostet</strong>. Eine Verbindung zu Google-Servern beim Seitenaufruf findet nicht
        statt.
      </p>
      <h3>Bilder von Unsplash</h3>
      <p>
        Einzelne Beispielbilder werden von <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">unsplash.com</a>{" "}
        eingebunden. Beim Laden der Bilder kann Ihre IP-Adresse an Unsplash übertragen werden.
        Rechtsgrundlage: <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an
        ansprechender Darstellung).
      </p>

      <h2>
        <span className="num">10</span>Ihre Rechte als betroffene Person
      </h2>
      <p>Sie haben jederzeit das Recht:</p>
      <ul>
        <li>
          <strong>Auskunft</strong> über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO),
        </li>
        <li>
          <strong>Berichtigung</strong> unrichtiger oder Vervollständigung unvollständiger Daten zu
          verlangen (Art. 16 DSGVO),
        </li>
        <li>
          <strong>Löschung</strong> Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO),
          sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen,
        </li>
        <li>
          <strong>Einschränkung der Verarbeitung</strong> zu verlangen (Art. 18 DSGVO),
        </li>
        <li>
          <strong>Datenübertragbarkeit</strong> zu verlangen, d. h. Daten in einem strukturierten,
          gängigen, maschinenlesbaren Format zu erhalten (Art. 20 DSGVO),
        </li>
        <li>
          gegen die Verarbeitung <strong>Widerspruch</strong> einzulegen (Art. 21 DSGVO),
        </li>
        <li>
          eine erteilte <strong>Einwilligung jederzeit zu widerrufen</strong> (Art. 7 Abs. 3 DSGVO).
        </li>
      </ul>
      <p>
        Zur Geltendmachung Ihrer Rechte genügt eine formlose E-Mail an{" "}
        <a href="mailto:info@sueba-wohnbau.de">info@sueba-wohnbau.de</a>.
      </p>

      <h2>
        <span className="num">11</span>Beschwerderecht bei der Aufsichtsbehörde
      </h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
        personenbezogenen Daten zu beschweren (Art. 77 DSGVO). Zuständig für unser Unternehmen ist:
      </p>
      <p>
        <strong>Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong>
        <br />
        Lautenschlagerstraße 20, 70173 Stuttgart
        <br />
        <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
          baden-wuerttemberg.datenschutz.de
        </a>
      </p>

      <h2>
        <span className="num">12</span>SSL-/TLS-Verschlüsselung
      </h2>
      <p>
        Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher
        Inhalte eine SSL-/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der
        Adresszeile des Browsers (https statt http) sowie am Schloss-Symbol.
      </p>

      <h2>
        <span className="num">13</span>Aktualität und Änderung
      </h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand <strong>{UPDATED}</strong>.
        Durch die Weiterentwicklung unserer Website oder geänderte gesetzliche Vorgaben kann es
        notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Fassung kann
        jederzeit auf dieser Seite abgerufen werden.
      </p>

      <div className="legal-card is-info">
        <p>
          <strong>Hinweis:</strong> Mit <span className="placeholder">platzhalter</span> markierte
          Felder sind vor Veröffentlichung durch die tatsächlichen Unternehmens- und Verfahrensdaten
          zu ersetzen. Eine abschließende rechtliche Prüfung durch eine:n Datenschutzbeauftragte:n
          oder Rechtsanwält:in wird empfohlen.
        </p>
      </div>
    </LegalShell>
  );
}
