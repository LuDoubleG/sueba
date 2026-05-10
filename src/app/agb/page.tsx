import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Allgemeine Geschäftsbedingungen der Süba Dragon Wohnbau GmbH für die Vermittlung von Anlageimmobilien und das Erstgespräch / Investment-Check.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/agb" }
};

const UPDATED = "Mai 2026";

export default function AgbPage() {
  return (
    <LegalShell
      index="10"
      eyebrow="Rechtliches"
      title="Allgemeine Geschäftsbedingungen"
      intro={`Diese AGB regeln die Geschäftsbeziehung zwischen der Süba Dragon Wohnbau GmbH und ihren Kund:innen im Rahmen der Vermittlung von Immobilien als Kapitalanlage sowie der unverbindlichen Erstprüfung (\u201eInvestment-Check\u201d).`}
      updated={UPDATED}
    >
      <h2>
        <span className="num">§ 1</span>Geltungsbereich
      </h2>
      <p>
        (1) Diese Allgemeinen Geschäftsbedingungen („AGB“) gelten für alle Geschäftsbeziehungen zwischen
        der <strong>Süba Dragon Wohnbau GmbH</strong>, <span className="placeholder">vollständige Anschrift</span>{" "}
        (nachfolgend „Anbieter“) und ihren Kund:innen (nachfolgend „Kund:in“) in der zum Zeitpunkt des
        Vertragsschlusses gültigen Fassung.
      </p>
      <p>
        (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen der Kund:in
        werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich
        schriftlich zugestimmt hat.
      </p>
      <p>
        (3) Verbraucher:in im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu
        Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen
        beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer:in ist eine natürliche
        oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines
        Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt
        (§ 14 BGB).
      </p>

      <h2>
        <span className="num">§ 2</span>Leistungsgegenstand
      </h2>
      <p>
        (1) Der Anbieter erbringt Leistungen im Bereich der Vermittlung und Beratung rund um Immobilien
        als Kapitalanlage, insbesondere:
      </p>
      <ul>
        <li>Vermittlung von Anlageimmobilien (Bestand &amp; Neubau)</li>
        <li>Standort- und Mietpotenzial-Analyse</li>
        <li>Finanzierungs-Sparring (keine eigene Finanzierungsberatung i. S. v. § 34 i GewO)</li>
        <li>Erstprüfung („Investment-Check“) — kostenfrei und unverbindlich</li>
        <li>Vermittlung an spezialisierte Drittanbieter (Steuerberatung, Banken, Hausverwaltung)</li>
      </ul>
      <p>
        (2) Der Anbieter ist <strong>kein</strong> Anlageberater, Steuerberater, Rechtsanwalt oder
        Finanzdienstleister im Sinne des KWG. Sämtliche Aussagen zu Rendite, Wertentwicklung,
        steuerlichen Auswirkungen oder rechtlichen Konsequenzen sind unverbindliche Einschätzungen und
        ersetzen keine individuelle Beratung durch entsprechend qualifizierte Fachpersonen.
      </p>

      <h2>
        <span className="num">§ 3</span>Investment-Check / Erstgespräch
      </h2>
      <p>
        (1) Der „Investment-Check“ ist eine <strong>kostenfreie und unverbindliche</strong>{" "}
        Erstprüfung der individuellen Investment-Situation der Kund:in. Hierbei werden Bonität,
        Liquidität, persönliche Ziele und Risikoneigung erörtert, um zu klären, ob eine Anlageimmobilie
        grundsätzlich zur Strategie der Kund:in passt.
      </p>
      <p>
        (2) Der Investment-Check stellt <strong>kein verbindliches Angebot zum Verkauf oder zur
        Vermittlung einer konkreten Immobilie</strong> dar. Es entstehen für die Kund:in keinerlei
        Verpflichtungen. Der Anbieter behält sich vor, ein Erstgespräch ohne Angabe von Gründen
        abzulehnen.
      </p>
      <p>
        (3) Die Anfrage über das Kontaktformular der Website stellt eine{" "}
        <em>Aufforderung zur Abgabe eines Angebots</em> (invitatio ad offerendum) dar. Ein Vertrag
        kommt erst durch separate schriftliche Bestätigung bzw. durch das tatsächliche Erstgespräch
        zustande.
      </p>

      <h2>
        <span className="num">§ 4</span>Vermittlungsvertrag &amp; Provision
      </h2>
      <p>
        (1) Bei konkreter Vermittlung eines Immobilienobjekts wird ein eigenständiger{" "}
        <strong>Maklervertrag in Textform</strong> abgeschlossen, in dem Provisionssatz, Fälligkeit,
        Auslagen und gegenseitige Pflichten gesondert geregelt werden.
      </p>
      <p>
        (2) Es gelten die gesetzlichen Regelungen der §§ 652 ff. BGB sowie — bei Verbrauchergeschäften
        über Kaufverträge an Wohnungen oder Einfamilienhäusern — die Bestimmungen der{" "}
        <strong>§§ 656 a–d BGB</strong> (Textform-Erfordernis, Provisionsteilung).
      </p>
      <p>
        (3) Die genaue Höhe der Provision sowie die Provisionspflichtigkeit der Kund:in werden vor
        Vermittlung individuell vereinbart und bedürfen der Textform.
      </p>

      <h2>
        <span className="num">§ 5</span>Pflichten der Kund:in
      </h2>
      <p>
        (1) Die Kund:in ist verpflichtet, alle für die Erstprüfung und Vermittlung notwendigen Angaben
        wahrheitsgemäß und vollständig zu erteilen. Dies betrifft insbesondere Angaben zu Bonität,
        Eigenkapital, monatlich verfügbarer Liquidität sowie persönlichen Investmentzielen.
      </p>
      <p>
        (2) Die Kund:in hat den Anbieter unverzüglich zu informieren, wenn sich für die Vermittlung
        relevante Angaben (z. B. Einkommens- oder Familienverhältnisse) wesentlich ändern.
      </p>
      <p>
        (3) Die Kund:in stellt sicher, dass für die Bearbeitung verwendete Kontaktdaten
        (E-Mail-Adresse, Telefonnummer) korrekt und erreichbar sind.
      </p>

      <h2>
        <span className="num">§ 6</span>Widerrufsrecht für Verbraucher:innen
      </h2>
      <div className="legal-card is-info">
        <h3>Widerrufsbelehrung</h3>
        <p>
          Sie haben das Recht, binnen <strong>14 Tagen</strong> ohne Angabe von Gründen diesen Vertrag
          zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Süba Dragon Wohnbau GmbH,{" "}
          <span className="placeholder">vollständige Anschrift</span>, E-Mail:{" "}
          <a href="mailto:info@sueba-wohnbau.de">info@sueba-wohnbau.de</a>) mittels einer eindeutigen
          Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen
          Vertrag zu widerrufen, informieren.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
          Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>
        <h3>Folgen des Widerrufs</h3>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
          erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die
          sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene,
          günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn
          Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags
          bei uns eingegangen ist.
        </p>
      </div>

      <h2>
        <span className="num">§ 7</span>Haftung
      </h2>
      <p>
        (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des
        Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der Anbieter bei Schäden aus der
        Verletzung des Lebens, des Körpers und der Gesundheit von Personen.
      </p>
      <p>
        (2) Im Übrigen gilt die folgende beschränkte Haftung: Bei leicht fahrlässig verursachten
        Sachschäden haftet der Anbieter nur bei der Verletzung einer wesentlichen Vertragspflicht
        (Kardinalpflicht), jedoch der Höhe nach beschränkt auf den bei Vertragsschluss vorhersehbaren,
        vertragstypischen Schaden.
      </p>
      <p>
        (3) Der Anbieter übernimmt <strong>keine Garantie für den wirtschaftlichen Erfolg</strong>{" "}
        einer vermittelten Immobilieninvestition. Insbesondere wird keine Haftung übernommen für
        zukünftige Marktentwicklungen, Mietausfälle, Zinsänderungen, Wertentwicklung der Immobilie,
        steuerliche Behandlung oder Bonitätsentwicklung der Kund:in.
      </p>
      <p>
        (4) Hinweise und Empfehlungen ersetzen keine individuelle Beratung durch Fachpersonen
        (Steuerberater, Anwält:in, Bank). Der Anbieter empfiehlt ausdrücklich, vor jedem
        Investmentschritt eine entsprechende Fachberatung in Anspruch zu nehmen.
      </p>

      <h2>
        <span className="num">§ 8</span>Vertraulichkeit
      </h2>
      <p>
        Beide Vertragsparteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung erlangten
        vertraulichen Informationen vertraulich zu behandeln und nur für die Zwecke des Vertrags zu
        verwenden. Diese Verpflichtung besteht auch nach Beendigung der Geschäftsbeziehung fort.
      </p>

      <h2>
        <span className="num">§ 9</span>Datenschutz
      </h2>
      <p>
        Der Umgang mit personenbezogenen Daten richtet sich nach der separaten{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>, die ergänzender Bestandteil dieser AGB ist.
      </p>

      <h2>
        <span className="num">§ 10</span>Schlussbestimmungen
      </h2>
      <p>
        (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei
        Verbraucher:innen gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch
        zwingende Bestimmungen des Rechts des Staates, in dem die Verbraucher:in ihren gewöhnlichen
        Aufenthalt hat, entzogen wird.
      </p>
      <p>
        (2) Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im
        Zusammenhang mit diesem Vertrag ist — soweit gesetzlich zulässig — Mannheim.
      </p>
      <p>
        (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies die
        Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung tritt die
        gesetzlich zulässige Regelung, die dem mit der unwirksamen Bestimmung verfolgten Zweck am
        nächsten kommt.
      </p>

      <div className="legal-card is-warning">
        <p>
          <strong>Hinweis:</strong> Diese AGB stellen einen sorgfältig erstellten Mustertext dar, der
          die typischen Aspekte einer Immobilien­vermittlungs­tätigkeit abdeckt. Vor produktivem Einsatz
          ist eine <strong>individuelle rechtliche Prüfung durch eine:n auf Immobilien- und
          Maklerrecht spezialisierte:n Rechtsanwält:in</strong> dringend zu empfehlen.
        </p>
      </div>
    </LegalShell>
  );
}
