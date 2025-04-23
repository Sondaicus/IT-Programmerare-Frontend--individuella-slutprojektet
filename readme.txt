* Hur programmet fungerar:

* Mapparna "src/app" --> innehåller programets alla delar, alla filer och mappar jag hänvisar till finns här inne. 
  Det blev två mappar när jag byggde projektet med terminalen för att sätta upp Next.js, försökte jag ändra så att det bara blev en mapp t.ex. bara "src" eller "app" 
  så blev det en massa fel någonstans, så lätt det vara kvar som det är.

* Olika mappar i programet:
 - "css" --> skulle innehålla alla olika CSS-filer ifall jag hade fler än bara "globals.css", men är för närvarande tomt då allt finns inom "global.css".
   Tänker kanske ta bort i slutet av projektet när allt nästan är klart om jag inte laggt in något där, eller så delar jag upp hinnehållet i "globals.css"
   i mindre filer som jag lägger där i för att lättare katigorisera olika CSS-regler.
   
 - "json" --> innehåller all data som finns sparad i JSON-filer, det närmaste min program kommer till att ha ett API. Indelat i olika mappar för att hämta text information
   där all information används till att mata in innehållet i det personliga brevet som skall synas för användaren. Innehållet i mapparna kan delas in i två olika delar, 
   mapparna som är språk baserat baserat på innehållet som matas in "swedish/english", och den mapp där allt innehåll är detsamma oavset vilket språk som används "universal".
   Varje JSON-fil i respektive mapp är också indelad två kategorier; de som är statiska "static", och de som är dynamiska "dynamic". Statiska filerna har innehåll som alltid
   kommer att matas in i personliga brevet för användaren att se, medans de dynamiska har information som kanske matas in i personliga brevet baserat på de inställningar som
   användaren väljer om vad det personliga brevet skall innehålla.
   
 - "ts" --> innehåller alla fristående filer som är i .ts format. Dessa filer är till för att utföra TypeScript funktioner som kan användas över flera olika moduler, 
   så att man kan importera funktionerna till olika moduler utan att behöva beskriva dom flera gånger i olika moduler, för det mesta.
   
 - "tsx" --> innehåller alla filer utom de som skapades med programet som är i .tsx format. Alla skapade moduler finns med här, de är indelade i olika undermappar baserad på deras 
   funktioner de används till. Mappen "document-body-sections" används till att dela in programmet i dess huvud komponenter, dvs <header>, <body>, och <footer>. "modules" innehåller 
   alla andra moduler för programmet, vilket utgör de komponenter med olika funktioner som bygger upp programmet. Undermappen "personal-letter-generator" innehåller de moduler som
   utgör de delarna som visas upp i det personliga brevet, där varje enskild modul utgör en beståndsdel av personliga brev generatorn för dess innehåll.
 