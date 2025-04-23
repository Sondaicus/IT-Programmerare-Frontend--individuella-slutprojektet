import Header from "@/app/tsx/document-body-sections/header";
import Main from "@/app/tsx/document-body-sections/main";
import Footer from "@/app/tsx/document-body-sections/footer";

export default async function Home(
  {searchParams,}: 
  {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) 
{
  const {placeholderTitle = "$#%@¤" , chosenLanguage = "swedish" , techKeyWords = [] , phraseKeyWords = [] , mentionDiploma = ""} = await searchParams;
  const title = Array.isArray(placeholderTitle) ? placeholderTitle[0] : placeholderTitle;
  const language = Array.isArray(chosenLanguage) ? chosenLanguage[0] : chosenLanguage;
  const diploma = mentionDiploma === "true";
  
  const plParamsData = { title , language , techKeyWords , phraseKeyWords , diploma };

  console.log(plParamsData);



  return (
    <body /*onClick={() => stopPropogation(event)}*/>
      <Header />
      <Main plParamsData={plParamsData} />
      <Footer />
    </body>
  );
}
