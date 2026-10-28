# Codex Packit – GitHub-test v0.3

Codex Nord-design, mobil-/iPad-tilpasset PWA, ingen eksterne biblioteker eller backend. Dette er en **testutgave**, ikke en endelig produksjonslansering.

## Publiser på GitHub Pages

1. Last ned og pakk ut ZIP-filen.
2. Opprett et repository på GitHub, for eksempel `codex-packit`.
3. Last opp **filene fra mappen `codex-packit-github` direkte i repository-roten**. Alle filene må med: `index.html`, `app.js`, `styles.css`, `storage.js`, `sw.js`, `manifest.webmanifest`, `icons/` og `README.md`. Ikke last opp bare ZIP-filen.
4. Gå til **Settings → Pages → Build and deployment**. Velg **Deploy from a branch**, `main` og `/(root)`. Lagre.
5. Åpne: `https://DITT-BRUKERNAVN.github.io/codex-packit/`. Dersom repoet har et annet navn, brukes det navnet i URL-en.
6. På iPhone/iPad: Åpne adressen i **Safari** → Del → **Legg til på Hjem-skjerm**. På Android: Bruk nettleserens installer-/legg til på hjemskjerm-funksjon.
7. Åpne appen én gang med internett før du tester offline. Endringer på GitHub kan kreve oppdatering av nettlesersiden/PWA-en.

> Repoet kan være offentlig, men **pakkedata, navn og bilder lagres bare lokalt i nettleseren/enheten**; de sendes ikke til GitHub. Brukere med samme URL får ikke automatisk felles data. Ikke last opp JSON-sikkerhetskopier eller private bilder til et offentlig repository.

## Slik tester du

1. Åpne **Mer → Opprett prøvetur** for et eksempel med Sommerferie, Oslo-tur, elektronikkmappe, ulike bagasjeplasseringer på utreise/hjemreise og pakkesett.
2. Under **Turer → Rediger tur / bilde** kan du velge et bilde fra mobil eller PC. Bildet komprimeres til JPEG og vises på oversiktskortet og turen. Underturer kan ha eget bilde; uten eget bilde arves hovedturens bilde.
3. Under **Pakking** kan du bytte mellom utreise og hjemreise, krysse av og endre bagasje for enkeltgjenstander.
4. Under **Bagasje** kan du legge en innerbag i en annen bag og kontrollere at selve innerbagen er pakket.
5. Under **Underturer** kan du opprette underturer. Gjenstander kan hentes fra hovedturen uten duplisering. Nytt innkjøp på en undertur kan legges til hovedturens hjemreise.
6. Under **Deltakere** lagres personer for gjenbruk. Under **Mine ting** kan du bygge katalog og pakkesett.
7. Under **Finn ting** søker du etter navn eller plassering, for aktuell hovedtur eller alle turer.
8. Under **Mer → Eksporter** kan du ta en JSON-sikkerhetskopi med forsidebilder. Import erstatter all eksisterende lokal data **etter bekreftelse**.

## Hva inngår i testutgaven?

- Codex Nord med mørkt/lyst tema, mobil bunnmeny og nettbrett/PC-sidemeny.
- Hovedturer med ett nivå av underturer, separate pakkelister og deltakere.
- Forsidebilder med lokal komprimering, arving fra hovedtur og valgfritt utsnitt.
- Deltakerregister, gjenstandskatalog og pakkesett.
- Fysisk bagasje/innerbag og egen bagasjeplassering per retning og tur.
- Egen pakkestatus for utreise og hjemreise (inkludert antall, redigering og ny kontroll etter flytting).
- Innkjøp og bevisst forbruk/gaver under underturer kan påvirke hovedturens forventede hjemreise.
- Søk, dato/nedtelling, lokale data med IndexedDB og eksport/import.
- Offline-støtte via service worker etter første nettbesøk.

## Bevisste avgrensninger / videre arbeid

- Dette er en **beta** for å teste brukerflyt og datamodell. Ingen sanntidssynk, konto eller pushvarsler.
- Kalenderbasert nedtelling er veiledende; reisefase kan endres manuelt.
- Full aktivitetslogg for alle bevegelser, flere samtidige underturer og detaljerte grensefall for mengdefordeling er ikke ferdigstilt.
- Gjenstandsbilder og fullstendig oppsett for varslinger er ikke implementert i denne testutgaven (forsidebilder på turer er implementert).
- Pakkestatusen viser registrert/planlagt pakking, **ikke en verifisert GPS-plassering**.
- Lokale nettleserdata kan gå tapt ved sletting av nettsteddata, bytte av telefon eller endring av nettleser. Ta sikkerhetskopi jevnlig.
- En gammel standalone-HTML-fil og en ny GitHub Pages-side har normalt forskjellige lagringsområder. For å overføre data, eksporter fra den gamle appen og importer JSON under Mer. Eldre v1/v1.1-backup håndteres med best mulig migrering, men kontroller pakkelistene etter import.
- GitHub Pages har ingen backend og kan ikke alene sende planlagte web push-varsler.

## Teknisk

Statisk HTML/CSS/JavaScript (ES-modul), IndexedDB, manifest og service worker. Alle stier er relative, slik at appen fungerer i et GitHub Pages-prosjektrepository. Hver bag og gjenstand har stabil ID innenfor en hovedtur; retningsspesifikke plasseringer og pakkestatus lagres separat. Dataskjema: v3. Egen IndexedDB-database (`codex-packit-nord-beta`) for å unngå å overskrive tidligere prototyper.
