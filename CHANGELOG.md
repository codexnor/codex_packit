# Endringslogg – Codex Packit

## v0.4.1 – Trygg registersletting og historikkbevaring
- Deltakere, pakkesett, lagret bagasje og gjenstandskatalog: arkiver, gjenopprett og slett fra registeret.
- Eksisterende turer beholder identifikatorer, navn, bilder, gjenstander, bagasje, pakkestatus og eierkoblinger uavhengig av registersletting.
- Slettede registerposter beholdes som historiske referanser (logisk sletting), men skjules fra nye valg.
- Redigeringsskjema for eksisterende tur beholder slettede/arkiverte deltakere som historiske valg, slik at redigering ikke fjerner dem ved et uhell.
- Automatisk lagring av gjenstandsbilder på turposter fra pakkesett og lagret bagasje.
- Backup/dataskjema 5 med oppgradering av v0.3/v0.4-data, og oppdatert PWA-cache.
- Tester på datamodell av registersletting, migrering og historikkreferanser. Nettleserens UI-test er ikke kjørt i denne sesjonen grunnet testmiljøets nettleserbegrensning.

## v0.4 – Polar Blue, mobil-UX og gjenbrukbar bagasje
- Ny Polar Blue-profil: marineblå, kjølig hvit Codex, lys blå Packit.
- Fast topp- og bunnfelt, innholdsscrolling, safe-area-håndtering og forsøk på å forhindre zoom.
- Kompakt dashboard, tre nøkkeltall på én rad, én pakkeknapp. Ny tur kun under Turer; bilderedigeringshandling kun under Turinfo.
- «Underturer» omdøpt til «Delreiser».
- Profilbilder og gjenstandsbilder med lokal komprimering og JSON-backup.
- Gjenbrukbar bagasje under Mine ting med valgfri kombinasjon av pakkesett og gjenstander; nytt schemaVersion 4.
- Sletting av turspesifikke gjenstander og bagasje med bekreftelse og ivaretakelse av referanser.
- Hent fra hovedtur: rettet stor checkbox/formatering og fjernet på hovedtur.
- Prøvetur: rettet udeklarert `sub`-variabel.
- PWA-cache oppdatert til 0.4, versjonsmerkede ressurser for bedre oppdatering fra v0.3.

## v0.3 – Første GitHub-testutgave
- Codex Nord, turer/delreiser, bagasjehierarki, utreise/hjemreise, pakkesett, søk, turbilder, backup og offline-støtte.
