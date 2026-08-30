# SitePulse design guidelines

> Levende designkilde for SitePulse-nettsiden og produkt-UI-et. Oppdater denne filen når vi tar en ny visuell, strukturell eller språklig beslutning.

## Hvordan denne filen skal brukes

Denne filen samler beslutninger som skal holde nettside, dashboard, gateway og øvrig SitePulse-kommunikasjon visuelt sammenhengende.

- **Briefen** er kilden til de opprinnelige produkt- og merkevarekravene.
- **Denne filen** er den løpende, implementerbare versjonen av reglene.
- Nye beslutninger skal legges til under `Beslutninger` og ved behov oppsummert i relevante deler av dokumentet.
- En eksplisitt brief-beslutning kan bare endres dersom den nye beslutningen dokumenteres her med begrunnelse.

Kilde: `/Users/madsfalk/Downloads/sitepulse-ui-design-brief.md`.

## Status

- **Sist oppdatert:** 2026-08-30
- **Status:** Grunnsystem etablert; detaljer kan finjusteres når ekte produktdata, hardware-bilder og pilotresultater blir tilgjengelige.
- **Stack:** Astro + Tailwind CSS v4
- **Primært språk:** Norsk bokmål

### Produktlenke

SitePulse Cloud åpnes på [sitepulse.zimo.no](https://sitepulse.zimo.no). Eksterne Cloud-lenker skal åpnes i ny fane med `rel="noreferrer"`.

## Produkt og merkevare

### Hierarki

- **SitePulse** er produktet og skal være den tydelige hovedidentiteten.
- **ZiMO** er selskapet og vises sekundært, som `SitePulse by ZiMO` eller tilsvarende lockup.
- SitePulse Yellow tilhører produktet, ikke ZiMO som selskap.

### Posisjonering

SitePulse er et moderne industrielt kontrollsystem for byggeplassen. Det hjelper entreprenører med å få lavere kostnader gjennom bedre kontroll, automatisk dokumentasjon og intelligent styring.

Prioritert fortelling:

```text
Kontroll → automatisering → dokumentasjon → lavere kostnader
```

Teknologien (sensorer, Zigbee, gateway, LTE og cloud) forklarer hvordan systemet fungerer, men er ikke hovedbudskapet.

### Målgruppe

Prosjektledere, anleggsledere, produksjonsledere, teknisk-/digitaliseringsansvarlige, større entreprenører og offentlige eller semioffentlige aktører.

Designet skal tåle enterprise-bruk og gi trygghet, presisjon og modenhet.

## Visuell retning

### Følelse

Industrial intelligence / modern control platform:

`Premium · industrielt · moderne · teknisk · presist · robust · rolig · seriøst · data-drevet`

Retningen skal ligne et ekte kontrollsystem mer enn en generisk SaaS-startup.

### Unngå

- gul/svart fareteip, hazard-mønstre og andre byggklisjeer
- neon, cyberpunk eller lilla AI-gradienter
- grønn ESG-branding som hoveduttrykk
- store glassmorphism-flater eller myke consumer-app-kort
- card soup, unødvendig 3D og store drop shadows
- cartoon-/emoji-ikoner
- generiske stockbilder og konstruerte tech-team-bilder
- buzzwords som «revolusjonerende», «banebrytende» og «innovativ IoT-løsning»

## Farger

### Kjernepalett

| Token | Hex | Rolle |
| --- | --- | --- |
| `sitepulse-yellow` | `#F4B400` | Produktidentitet, primær CTA, aktiv/selected state, signal og datapunkt |
| `graphite` | `#111315` | Header, hero, mørke seksjoner, premium dark surfaces |
| `dark-surface` | `#1B1F23` | Mørke paneler og produktflater |
| `off-white` | `#F5F5F2` | Varm, lys hovedflate |
| `light-background` | `#FAFAF8` | Sekundær lys bakgrunn |
| `muted-text` | `#9CA3A8` | Sekundær tekst på mørke flater; sjekk kontrast i faktisk bruk |

`#F4B400` er valgt som gjeldende SitePulse Yellow. `#F5B800` er tillatt som nærmeste alternativ dersom kontrast eller trykk/produksjon krever det. Den eksisterende `#F5BD28` i koden bør behandles som en eldre implementasjonsverdi og ikke brukes i nye komponenter uten avklaring.

### Semantiske farger

Produktfargen og statusfargene har ulike roller.

| Token | Rolle | Eksempel |
| --- | --- | --- |
| SitePulse Yellow | action, selected, active, viktig signal | aktiv automasjon |
| Green | besparelse, suksess, normal drift, positivt resultat | `18 420 kr spart` |
| Blue | informasjon, nøytral data, systeminfo | synkroniseringsstatus |
| Orange | advarsel | mulig avvik |
| Red | alarm, feil, kritisk status | offline/kritisk grense |

Grønn og rød er statusfarger, ikke alternative brandfarger.

### Mengdeforhold

Som utgangspunkt:

- 70–80 % nøytrale flater
- 15–25 % kontrast mellom lyse og mørke flater
- 5–10 % SitePulse Yellow

Når brukeren ser gult, skal det bety: «Dette er SitePulse, dette er aktivt, eller dette er viktig.» Gult skal normalt ikke fylle en hel navbar, lange bakgrunnsseksjoner, all tekst eller alle grafer.

## Typografi

- Foretrukket font: **Geist**.
- Tillatte fallback-/alternativvalg: Inter eller Manrope.
- Overskrifter: korte, semibold/bold, tett tracking og god luft rundt.
- Brødtekst: 17–19 px på desktop, god linjehøyde og begrenset tekstbredde.
- Bruk uppercase-labels sparsomt, primært til korte eyebrows.
- Teknisk, men ikke futuristisk; høy lesbarhet er viktigere enn særpreg.

Eksempel på hierarki:

```text
Eyebrow: 11–12 px, semibold, sparsom uppercase
H1:      stor, kort, semibold/bold
H2:      stor, tydelig, én idé per seksjon
Body:    17–19 px desktop, komfortabel linjehøyde
Meta:    12–14 px, kun for sekundær informasjon
```

## Layout og komponenter

### Grid og rytme

- Bruk en konsekvent sentrert container; prosjektets eksisterende `max-width: 1240px` er en god start.
- Bygg seksjoner rundt én tydelig idé, ikke en matrise av like feature-cards.
- Veksle mellom lyse og mørke seksjoner for rytme.
- Prioriter luft, tydelig hierarki og visuell kontrast fremfor dekorasjon.
- Unngå horisontal scrolling, også i dashboard-grafer og tabeller på mobil.

### Radius

- Cards: 10–14 px
- Buttons: 8–10 px
- Inputs: ca. 8 px
- Dashboard-paneler: 10–12 px

Unngå 24–32 px-radius som gir et typisk consumer/SaaS-uttrykk.

### Borders og skygger

Foretrekk 1 px borders, spacing og bakgrunnsforskjeller. Bruk skygger sparsomt og subtilt; ingen store, tunge drop shadows.

### Interaksjon

- Alle klikkbare elementer skal ha tydelig hover, `cursor-pointer` og synlig keyboard-focus.
- Bruk primært farge, opacity og border til hover; ikke layout-flyttende scale-effekter.
- Overganger bør være 150–300 ms.
- Respekter `prefers-reduced-motion`.
- Ikke la farge være eneste indikator for status; bruk tekst, ikon eller mønster i tillegg.
- Touch-targets på mobil skal være store nok for feltbruk.

## Header og navigasjon

Headeren skal være graphite eller annen mørk nøytral flate, ikke helgul.

Anbefalt struktur:

```text
SitePulse  by ZiMO

Produkt   Løsninger   Resultater   Pris                  [Snakk med oss]
```

SitePulse skal være visuelt først. ZiMO skal være synlig, men sekundært. Primær CTA bruker SitePulse Yellow med mørk tekst. Navigasjonen skal være kort og orientert mot kjøpsreisen.

## Landingsside

Foreslått sekvens:

1. Header med SitePulse + `by ZiMO` og én gul CTA.
2. Hero med økonomisk verdi og produktvisualisering tidlig.
3. Social proof når det finnes offentlig godkjent grunnlag.
4. Kostnadsproblemet: det koster å ikke vite.
5. Systemet: sensorer → gateway → cloud.
6. Automasjon med en konkret regel.
7. Automatisk dokumentasjon med historikk/tidslinje/rapport.
8. Økonomi med reelle KPI-er i NOK, prosent og timer.
9. Case/pilot med ekte bilde og dokumenterte resultater.
10. Final CTA: `Snakk med oss`.

### Hero-regel

Heroen skal på få sekunder svare på hva SitePulse gjør og hvorfor det betyr noe økonomisk.

Foretrukket budskap:

```text
Lavere kostnader på byggeplassen.
```

Produktvisualisering (dashboard, temperaturgraf, automasjon, gateway/sensor og signal) prioriteres foran et rent stockfoto. Foto kan brukes som kontekst eller støtte.

### Seksjonsregel

Én historie per stor seksjon:

- `Varme bare når det trengs`
- `Dokumentasjonen skriver seg selv`
- `Se hva byggeplassen faktisk koster`

Vis stor graf, logg, tidslinje eller økonomivisning med forklaring. Unngå seks like kort for temperatur, fukt, energi, varsling, cloud og gateway.

## Produktvisualisering og data

SitePulse skal oppleves som ett sammenhengende system:

```text
Sensorer → SitePulse Gateway → SitePulse Cloud → varsling / dokumentasjon / automasjon
```

Visualiseringer skal være enkle: store rene objekter, få labels, subtile linjer og SitePulse Yellow som signal eller kobling.

### Dashboard

Dashboardet skal være datatungt uten å bli rotete, rolig å lese og egnet for desktop, nettbrett og mobil.

Prioriter økonomiske KPI-er når de er reelle:

```text
18 420 kr   estimert spart denne måneden
−31 %       driftstid byggvarme
12          aktive automasjoner
```

Bruk KPI-kort der de faktisk hjelper; unngå at hele UI-et blir en samling små kort.

### Grafer

- Ren grid, tydelig tidsakse og få serier.
- SitePulse Yellow brukes på valgt SitePulse-status/dataserie.
- Blå, cyan, grå, grønn og oransje kan brukes for andre serier etter semantisk rolle.
- Rød brukes kun ved kritisk tilstand.
- Grafen skal kunne leses uten hover alene; viktige verdier må også finnes som tekst.

### Grafisk Pulse-språk

Bruk et subtilt signal-/målepunktspråk, for eksempel:

```text
—●—●——●—
```

Det kan brukes i logo, illustrasjoner, loading, grafer, seksjonsoverganger og signalet mellom sensor og gateway. Det skal ikke ligne et medisinsk EKG eller bli et dominerende mønster.

## Foto og hardware

Prioriter ekte produktbilder så snart de finnes:

- gateway montert på byggeplass
- sensorer, kabler, betong og midlertidig varme
- teknisk utstyr i faktisk produksjon
- mennesker i reell arbeidssituasjon

Litt støv og uperfekte, autentiske miljøer er en fordel. Unngå smilende stockfoto, generiske tech-team-bilder og sterile 3D-renderinger som hovedinnhold.

## Motion

Motion skal være subtil, rask og funksjonell:

- sensor → gateway-signal
- grafoppdatering
- automasjon fra idle til active
- count-up på KPI-er
- myke seksjonsoverganger
- tydelige hover-states

Unngå scroll-jacking, store parallax-effekter og flashy transitions uten funksjon.

## Tone of voice

Språket skal være konkret, kort, selvsikkert, teknisk nok og økonomisk orientert.

Foretrekk:

- `Lavere kostnader på byggeplassen.`
- `Varme bare når det trengs.`
- `Dokumentasjonen skriver seg selv.`
- `Se hva dere sparer.`
- `Byggeplassen reagerer selv.`

Skriv på norsk bokmål og bruk «dere» i kommersiell tekst. Forklar tekniske termer når de er nødvendige. Ikke la «IoT», «Zigbee» eller «LTE» ta plassen til kundeverdien i hero og hoved-CTA.

## Responsivitet og tilgjengelighet

Design og QA skal vurderes ved minst 375, 768, 1024 og 1440 px.

- Mobil er en prioritert feltflate, ikke en komprimert desktopversjon.
- Vis status, varsler og viktigste KPI-er tidlig på mobil.
- Bruk store touch-targets og korte lesbare blokker.
- Alle bilder skal ha meningsfull alt-tekst når de har informasjonsverdi.
- Alle interaktive elementer skal ha labels og tastaturfokus.
- Sørg for minst 4.5:1 kontrast for vanlig tekst.
- Gul tekst på hvit bakgrunn skal unngås; mørk tekst i gul knapp er normalfallet.
- Status skal kommuniseres med tekst/ikon i tillegg til farge.

## Implementasjonsnotater for Astro

- Bruk semantisk HTML og tilgjengelige lenker, buttons og nav-elementer.
- Bruk responsive bildevarianter/picture når samme foto skal fungere i flere utsnitt eller størrelser.
- Hold interaksjonene progressive og lette; siden skal føles rask og presis.
- Bruk SVG-ikoner fra ett konsistent sett eller en tydelig egen stil. Ikke bruk emoji som UI-ikoner.
- Nye design tokens skal samles her før de spres som hardkodede verdier i komponenter.

## Beslutninger

| Dato | Beslutning | Begrunnelse |
| --- | --- | --- |
| 2026-08-30 | Opprettet `design-guidelines.md` som prosjektets levende designsystem. | Gjør briefens føringer tilgjengelige i det daglige arbeidet og gir et sted for nye beslutninger. |
| 2026-08-30 | Bruk `#F4B400` som gjeldende SitePulse Yellow. | Briefen foreslår denne verdien; den gir en tydelig, kontrollert produktaccent. |
| 2026-08-30 | Behold briefens Geist-retning fremfor generisk enterprise-forslag om Lexend/Source Sans 3. | Briefen er den autoritative merkevarekilden; generiske UI-anbefalinger er kun supplement. |
| 2026-08-30 | Bruk enterprise-minimalisme/Swiss grid som arbeidsretning. | Understøtter briefens krav om et presist, rolig og robust kontrollsystem. |
| 2026-08-30 | SitePulse Cloud lenkes til `https://sitepulse.zimo.no` fra nav, Cloud-seksjonen og footer. | Gjør produktet tilgjengelig fra de naturlige inngangene på nettsiden. |

## Åpne spørsmål

- Endelig SitePulse Yellow etter kontrasttest på CTA, mørke flater og fysisk produkt.
- Endelig Geist-implementasjon og fontleveranse for produksjon.
- Endelig SitePulse + `by ZiMO`-lockup.
- Ekte hardware-foto og offentlig godkjente pilot-/Veidekke-resultater.
- Hvilke økonomiske KPI-er som kan vises med reelle data.
- Endelig ikonsett og hvordan Pulse-signaturen skal brukes uten å bli dekorativ støy.

## Kvalitetssjekk før levering

- [ ] SitePulse er tydeligere enn ZiMO.
- [ ] Gul brukes som signal/accent, ikke som stor dekorativ bakgrunn.
- [ ] Heroen forklarer økonomisk verdi og viser produktet tidlig.
- [ ] Reelle tall brukes der de finnes; ingen oppdiktede besparelser presenteres som fakta.
- [ ] UI-et bruker semantiske statusfarger riktig.
- [ ] Ingen emoji-ikoner, hazard-klisjeer eller generisk SaaS-estetikk.
- [ ] Hover, focus, mobil og reduced-motion er ivaretatt.
- [ ] Nye visuelle avvik eller bevisste unntak er dokumentert under `Beslutninger`.


## Endringer i redesignet

| Dato | Beslutning | Begrunnelse |
| --- | --- | --- |
| 2026-08-30 | Demo-landingssiden redesignes som en produktorientert kontrollflate. | Den tidligere versjonen var for fotodrevet og hadde helgul header; den nye versjonen viser produkt, data og økonomisk verdi tidligere. |
| 2026-08-30 | Headeren bruker mørk nøytral base med SitePulse først og ZiMO sekundært. | Gjør produktidentiteten tydelig og bevarer gul som et kontrollert SitePulse-signal. |
| 2026-08-30 | Eksempeldata merkes med \`Demo\` eller \`Demo-data\`. | Tall fra briefen skal ikke fremstå som dokumenterte pilotresultater før reelle data finnes. |
| 2026-08-30 | Landingssiden bruker større historiefortellende seksjoner: kostnad, flyt, løsninger, automasjon, fysisk/digital kobling, pris og CTA. | Reduserer card soup og gjør produktets verdi lettere å skanne. |


## Routing og uttrykksjustering

| Dato | Beslutning | Begrunnelse |
| --- | --- | --- |
| 2026-08-30 | SitePulse-nettsiden ligger på \`/sitepulse/\`; \`/\` redirecter automatisk dit. | ZiMO skal kunne få egne sider uten at SitePulse opptar rotdomenet. |
| 2026-08-30 | Den visuelle retningen er tonet ned fra «AI-generert» til mer konkret industriell/editorial. | Fjernet glow, grid-bakgrunn, overdrevet dashboard-shell og tunge skygger; beholdt mørk base, gul signalfarge og produktdata. |
| 2026-08-30 | Ekte byggeplassfoto brukes i hero sammen med et nøkternt Cloud-statuspanel. | Forankrer produktet i en faktisk arbeidssituasjon uten å gjøre siden til en ren stockfoto-side. |
| 2026-08-30 | Demo-tall er eksplisitt merket som demo-data. | Unngår at eksempelverdier blir lest som dokumenterte kunde- eller pilotresultater. |
