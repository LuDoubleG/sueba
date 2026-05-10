import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Allgemeine Geschäftsbedingungen der Süba Dragon Wohnbau GmbH für die Vermittlung von Baufinanzierung, Anschlussfinanzierung und Privatkrediten sowie den kostenlosen Konditions-Check.",
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
      intro={`Diese AGB regeln die Geschäftsbeziehung zwischen der Süba Dragon Wohnbau GmbH und ihren Kund:innen im Rahmen der Vermittlung von Immobiliardarlehen (§ 34 i GewO), Verbraucherkrediten sowie der unverbindlichen Erstprüfung (\u201eKonditions-Check\u201d).`}
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
        (1) Der Anbieter ist <strong>Immobiliardarlehensvermittler nach § 34 i Abs. 1 Satz 1 GewO</strong>{" "}
        und erbringt Leistungen im Bereich der Vermittlung von Verbraucher- und Immobiliardarlehen,
        insbesondere:
      </p>
      <ul>
        <li>Vermittlung von Baufinanzierungen, Anschluss- und Forward-Darlehen</li>
        <li>Vermittlung von Modernisierungs- und Sanierungskrediten</li>
        <li>Vermittlung von Privat- bzw. Ratenkrediten (Verbraucherdarlehen i. S. d. §§ 491 ff. BGB)</li>
        <li>Integration von KfW-Förderprogrammen sowie Landesförderungen</li>
        <li>Konditionsvergleich und strukturierte Bonitätsanalyse</li>
        <li>Konditions-Check als kostenfreie, unverbindliche Erstprüfung</li>
      </ul>
      <p>
        (2) Der Anbieter erbringt <strong>keine Anlageberatung</strong> nach KWG/WpHG, keine
        Steuer- oder Rechtsberatung. Aussagen zu Konditionen, Bauzinsen, Förderfähigkeit und
        steuerlichen Effekten sind tagesaktuelle, unverbindliche Einschätzungen — verbindlich
        sind ausschließlich die jeweiligen Bank-, Bausparkassen- oder Versicherer-Angebote.
      </p>

      <h2>
        <span className="num">§ 3</span>Konditions-Check / Erstgespräch
      </h2>
      <p>
        (1) Der „Konditions-Check“ ist eine <strong>kostenfreie und unverbindliche</strong>{" "}
        Erstprüfung der Finanzierungs- bzw. Kreditsituation. Hierbei werden Vorhaben, Bonität,
        Eigenkapital, monatliche Belastbarkeit und Lebensplanung erörtert, um eine erste
        Konditionsindikation zu erstellen.
      </p>
      <p>
        (2) Der Konditions-Check stellt <strong>kein verbindliches Angebot</strong> für ein
        Darlehen dar. Verbindliche Konditionen kommen ausschließlich nach Bonitätsprüfung und
        Zusage durch die finanzierende Bank zustande. Es entstehen für die Kund:in keinerlei
        Verpflichtungen.
      </p>
      <p>
        (3) Die Anfrage über das Kontaktformular der Website stellt eine{" "}
        <em>Aufforderung zur Abgabe eines Angebots</em> (invitatio ad offerendum) dar. Ein
        Vermittlungsauftrag kommt erst durch separate schriftliche bzw. textliche Bestätigung der
        Kund:in zustande.
      </p>

      <h2>
        <span className="num">§ 4</span>Vergütung &amp; Vermittlungsprovision
      </h2>
      <p>
        (1) Die Vermittlungsleistung des Anbieters ist für die Kund:in grundsätzlich{" "}
        <strong>kostenfrei</strong>. Die Vergütung erfolgt im Erfolgsfall durch die finanzierende
        Bank, Bausparkasse oder den Versicherer (sog. Provisionscourtage), die in den
        ESIS-Pflichtinformationen und der Effektivzins-Kalkulation des Darlehensvertrags
        enthalten ist.
      </p>
      <p>
        (2) Sollte im Einzelfall ausnahmsweise eine direkte Vergütung durch die Kund:in
        vereinbart werden, bedarf dies einer gesonderten <strong>schriftlichen Vereinbarung
        in Textform</strong> vor Vermittlungsbeginn unter Angabe von Vergütungshöhe,
        Fälligkeit und Bedingungen (§ 34 i Abs. 5 GewO i. V. m. § 17 ImmVermV).
      </p>
      <p>
        (3) Eine doppelte Vergütung (sog. Doppeltätigkeit) wird gegenüber der Kund:in offengelegt.
      </p>

      <h2>
        <span className="num">§ 5</span>Pflichten der Kund:in
      </h2>
      <p>
        (1) Die Kund:in ist verpflichtet, alle für die Erstprüfung und Vermittlung notwendigen
        Angaben — insbesondere zu Einkommen, Eigenkapital, bestehenden Verbindlichkeiten,
        Schufa-Status, Vorhaben und gewünschter Tilgungs-/Laufzeitstruktur —{" "}
        wahrheitsgemäß und vollständig zu erteilen.
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
        (3) Der Anbieter übernimmt <strong>keine Garantie für die Verfügbarkeit oder Höhe
        bestimmter Konditionen</strong>. Bauzinsen sind tagesabhängig, bonitätsabhängig und
        marktabhängig. Eine Bestzins-Indikation aus dem Konditions-Check ist unverbindlich;
        verbindliche Konditionen ergeben sich erst aus dem Bank-Angebot bzw. Darlehensvertrag.
      </p>
      <p>
        (4) Hinweise zu Tilgung, Laufzeit, Förderfähigkeit oder Forward-Strategien ersetzen
        keine individuelle Beratung durch Fachpersonen (Steuerberater, Anwält:in, Bank).
        Insbesondere für steuerliche Auswirkungen (z. B. AfA, Werbungskosten,
        Nichtveranlagungsbescheinigung) ist eine separate steuerliche Beratung erforderlich.
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
          die typischen Aspekte einer Vermittlungstätigkeit nach § 34 i GewO sowie der
          Verbraucherkreditvermittlung abdeckt. Vor produktivem Einsatz ist eine{" "}
          <strong>individuelle rechtliche Prüfung durch eine:n auf Bank- und Kapitalmarktrecht
          spezialisierte:n Rechtsanwält:in</strong> sowie die Abstimmung mit der zuständigen IHK
          (Aufsicht nach § 34 i GewO) dringend zu empfehlen.
        </p>
      </div>
    </LegalShell>
  );
}
