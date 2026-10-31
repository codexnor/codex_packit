# Codex Packit – GitHub-test v0.4

**Codex Nord / Polar Blue.** Mobil- og nettbrettilpasset PWA uten backend. HTML, CSS og JavaScript; alle prosjektressurser er inkludert. Denne utgaven er en **testversjon**, ikke en ferdig publisert app.

## Installer på GitHub Pages

1. Ta en **JSON-sikkerhetskopi** fra eksisterende Packit: `Mer → Eksporter` før du oppdaterer.
2. Pakk ut `Codex_Packit_GitHub_Test_v0.4.zip`.
3. Last opp **innholdet i `codex-packit-github`** til roten av samme GitHub-repository som før. Erstatt filene `index.html`, `app.js`, `styles.css`, `storage.js`, `sw.js`, `manifest.webmanifest`, begge ikonfilene og dokumentasjonen. Ikke last opp bare ZIP-filen.
4. Gå til `Settings → Pages → Deploy from a branch`, velg `main` og `/ (root)` dersom Pages ikke allerede er aktivert.
5. Åpne GitHub Pages-adressen i Safari på iPhone/iPad. Velg Del → **Legg til på Hjem-skjerm** for appopplevelse.
6. Etter opplasting: **last inn nettsiden på nytt**, eventuelt lukk og åpne appen igjen for å oppdatere PWA. Nye stil- og kodefiler er versjonsmerket `v=0.4.0` for å unngå at den gamle versjonen ligger i nettleserens cache.

> **Viktig:** Privat turdata, deltakernavn og bilder skal ikke lastes opp til et offentlig GitHub-repository. De lagres lokalt i IndexedDB på hver enhet, og overføres bare hvis du selv eksporterer/importerer en JSON-sikkerhetskopi. Det er foreløpig **ingen synkronisering** mellom telefoner.

## Endringer i v0.4

- **Polar Blue**: mørk marineblå grunnpalett, kjølig hvit **Codex**-logo og lys blå **Packit**-logo.
- **Mobiltilpasset appskall**: fast toppfelt, fast bunnmeny og rullbart innholdsfelt. Safe-area-tilpasning for iPhone; forsøk på å slå av knipe-/dobbelttrykkzoom, med begrensninger i enkelte nettlesere. Ingen utilsiktet horisontal scrolling.
- **Oversikt**: kompakt reisekort med tre nøkkeltall på én linje, én fullbredde «Fortsett pakking»-knapp, ingen «Ny tur» eller «Endre forsidebilde»-knapp på kortet. Turbilder velges i **Turinfo**.
- «Underturer» er omdøpt til **Delreiser**. Bagasje heter konsekvent **Bagasje**.
- **Deltakere kan ha profilbilde** og **gjenstander kan ha bilde**, både i katalog og i den aktuelle pakkelisten. Bildene lagres offline i komprimert format.
- Under **Mine ting** finner du nå **Bagasje → Pakkesett → Gjenstander**. Du kan lagre en tom bagasje som mal, eller en bag med utvalgte pakkesett og gjenstander, og hente den inn i en tur. Endringer på turen endrer ikke malen.
- Slett gjenstander fra turens pakkeliste og bagasje fra Bagasje-visningen. Ved fjerning av bagasje blir innholdet **ikke slettet**, men flyttet til «Uten bagasje» og krever ny kontroll. Sletting fra hovedtur omfatter tilknyttede delreiser; sletting på delreise påvirker ikke hovedturens pakkeposter.
- **Hent fra hovedtur** vises bare i delreiser. Mobil-dialogen har rettede avkryssingsbokser og tekst.
- **Prøvetur**: rettet `Can't find variable: sub`.
- Sikkerhetskopi inkluderer bilder og nye bagasjemaler. **Eksisterende v0.3-data migreres automatisk til dataskjema 4 ved oppstart**. Ta likevel sikkerhetskopi først.

## Anbefalt test

1. `Mer → Opprett prøvetur` – kontroller at demoen opprettes uten feilmelding.
2. `Deltakere → Rediger` – last opp et profilbilde.
3. `Mine ting → Ny gjenstand` – registrer en ting med bilde; lag deretter et pakkesett.
4. `Mine ting → Ny bagasje` – velg pakkesettet og eventuelle gjenstander, eller opprett tom bagasjemal.
5. `Turer → Ny hovedtur → Pakking → Legg til → Hent lagret bagasje` – kontroller at mal, sett og innhold er med.
6. Test at gjenstanden er i forskjellige bager ut og hjem, og at avkryssing på hjemreise er uavhengig av utreise.
7. Test `Fjern` på én gjenstand og én bag, samt at **Mine ting** fortsatt viser malene.
8. Test `Delreiser → Hent fra hovedtur`, samt bakknapper, safe areas og at bunnmenyen er synlig på telefonen.
9. `Mer → Eksporter`: ta en JSON-sikkerhetskopi og prøv gjenoppretting på en testprofil.

## Kjente avgrensninger

- PWA er avhengig av hva iOS/Android/Safari tillater; **total blokkering av systemzoom kan ikke garanteres** i alle nettlesere og kan påvirke tilgjengelighet.
- Ingen konto, skysynk eller pushvarsler når appen er lukket.
- Hovedtur og ett nivå delreiser. Enkelte avanserte tilfeller med delt antall, overlappende delreiser og full sporbar endringshistorikk krever videre utvikling.
- Gjenbrukt bagasjemal henter inn gjenstandene fra katalogen på hver tur. Hvis en kataloggjenstand allerede finnes på samme tur, utelates duplikatet (ikke overskriv eller automatisk flytt den eksisterende gjenstanden).
- Lokale data kan gå tapt ved sletting av nettstedsdata eller bytte av telefon. Eksport anbefales jevnlig.
- Appen må åpnes én gang med internett før offline-støtte fungerer på GitHub Pages.

## Teknisk

Statisk PWA med IndexedDB, service worker og relative URL-er. Begge JSON-skjemaene 3 og 4 støttes ved import, og data i v0.3-databasen `codex-packit-nord-beta` blir videreført. **Utgaven bruker skjema 4.**
