import PersonalLetterGenerator from "@/app/tsx/modules/personal-letter-generator/personal-letter-generator";

export default function Main()
{
    let plContactInfo = {"name":"Axel Reje", "linkedIn":"https://www.linkedin.com/in/axel-reje-5ba0411b7/" , "phone":"Mobil: +46 070 748 79 70", "email":"E-post: axelreje@hotmail.com" };
    let plTitle = {"title":"Personligt brev för rollen som $#%@¤"};
    let plHeader = {"header":"Jag söker er tjänst som en yrkeshögskoleutbildad mjukvaruutvecklare för att utvecklas inom systemutveckling. Med erfarenhet från Tietoevry där jag arbetat med användarstöd och utveckling av system söker jag rollen som $#%@¤."};
    let plMain = {"main":"Jag anser att er annons med dess beskrivning skulle vara en tjänst som passar mig väldigt bra och där jag även ser att jag kan utvecklas inom mina intresseområden. Min största erfarenhet av programmering ligger inom Java då det är det som jag utbildats till i största grad, men jag har även förutom mina kunskaper inom Java och liknande teknologier erfarenhet inom .NET/C# med Microsoft Visual Studio från viss egen utveckling på min egen fritid, kunskap från komvuxutbildning inom programmering, samt så har jag även arbetat med .NET under min tid hos Tietoevry för det projekt jag var en del av. Från både min utbildning och min tid hos Tietoevry har jag haft erfarenhet av utveckling med olika tekniker och teknologier, databaser (SQL, MySQL, Microsoft SQL Server, textbaserade databaser, JSON), agil utveckling (Scrum, Jira, Confluence, SOLID, OOAD, OOP, Kanban), webbutveckling (HTML, CSS, JavaScript, TypeScript, Sass, Angular, Node.js, m.m.), versionshantering (Git, GitHub, Bitbucket, Azure DevOps), testdriven utveckling (TDD), att bygga program från grunder med designbeslut fram till slutgiltig produkt i team, samt en del arbete med Docker från min utbildning. Jag går just nu även en vidareutbildning genom arbetsförmedlingen hos företaget Lexicon som fokuserar på frontend utveckling med webbutvecklingsteknologier för att stärka min kunskap, där utöver de tekniker som redan nämnts ingår även React och Next.js."};
    let plFooter = {"footer":"Jag är mycket intresserad av programmering så jag känner jag valt rätt framtida karriär och utbildning. I mitt CV står de kurser som ingått i min yrkeshögskoleutbildning, vid förfrågan kan jag bifoga en lista med de flesta teknologier och kunskaper som ingått i respektive kurs ifall mer information önskas. Som person är jag noggrann, pålitlig, och ser alltid fram emot att få bredda mina kunskaper och utvecklas inom mitt område. Jag jobbar alltid på ett strukturerat och agilt sätt med kravanalys för att arbeta så effektivt som möjligt och uppnå bästa resultat."};
    let plClosingMessage = {"anticipation":"Jag ser fram emot att höra ifrån er och höra mer om denna spännande roll.", "regards":"Med vänlig hälsning,", "name":"Axel Reje"};

    let plData = { plContactInfo , plTitle , plHeader , plMain , plFooter , plClosingMessage};

    return (
        <main>
            <PersonalLetterGenerator plData={plData} />
        </main>
    );
}