## Dette er et repository til fagprøve oppgave min. Oppgaven er som følgende:

Selskapet Vestvik Consulting leverer kurs til bedrifter. De har flere ansatte med forskjellig kompetanse. Vestvik Consulting ønsker å anskaffe en nettside de kan bruke til å markedsføre seg. De ønsker at nettsida viser en kort presentasjon av navn, kompetanse og kontaktinformasjon for hver instruktør.

Informasjon om instruktørene er lagret i JSON-format (JavaScript Object Notation) og skal bli levert fra en GET request mot et API.
Nedenfor er et utdrag for å demonstrere hvilket format dataene vil være på :

[{"navn": "Ola Nordmann","kontaktinfo": "81549300","kompetanse": ["Førstehjelpsinstruktør","Avanserte HMS-kurs"]},{"navn": "Kari Nordmann","kontaktinfo": "81549300","kompetanse": ["Førstehjelpsinstruktør"]}]

Lag en nettside som svarer på behovene til Vestvik Consulting. Velg selv relevante rammeverk og teknologier. Du kan anta at informasjon om instruktørene vil bli overlevert som råtekst/String via et API-endepunkt. Per nå er ikke dette APIet implementert men det er ønskelig at du lager en fullstendig frontend-løsning i forkant av dette, slik at det kun trengs å legge inn URLen når denne er på plass.
