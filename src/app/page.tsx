import Header from "@/app/tsx/document-body-sections/header";
import Main from "@/app/tsx/document-body-sections/main";
import Footer from "@/app/tsx/document-body-sections/footer";
import { useContext } from 'react';
import {fetchLanguageStatic , fetchLanguageDynamic , fetchUniversalStatic , fetchUniversalDynamic} from "@/app/ts/read-apis";

export default function Home() 
{


  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
}
