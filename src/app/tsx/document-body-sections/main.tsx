import PersonalLetterGenerator from "@/app/tsx/modules/personal-letter-generator/personal-letter-generator";
import {fetchLanguageStatic , fetchLanguageDynamic , fetchUniversalStatic , fetchUniversalDynamic} from "@/app/ts/read-apis";
import React from "react";
import unwrapObject from "@/app/ts/unwrap-object";
import { generateContactInfoContent , generateTitleContent , generateHeaderContent , generateMainContent , generateFooterContent , generateClosingMessageContent } from "@/app/ts/personal-letter-text-generation";


export default function Main(plParamsData)
{
    let wrappNames = ["plParamsData"];
    let uwPlParamsData = unwrapObject(plParamsData, wrappNames);

    let languageStatic = fetchLanguageStatic(uwPlParamsData.language);
    let languageDynamic = fetchLanguageDynamic(uwPlParamsData.language);
    let universalStatic = fetchUniversalStatic();
    let universalDynamic = fetchUniversalDynamic();
    
    let plContactInfo = generateContactInfoContent(languageDynamic, universalStatic);
    let plTitle = generateTitleContent(languageStatic, uwPlParamsData.title);
    let plHeader = generateHeaderContent(languageStatic, uwPlParamsData.title);
    let plMain = generateMainContent(languageStatic, languageDynamic, universalStatic, universalDynamic, uwPlParamsData.phraseKeyWords, uwPlParamsData.techKeyWords);
    let plFooter = generateFooterContent(languageStatic, languageDynamic, uwPlParamsData.parsedMentionDiploma);
    let plClosingMessage = generateClosingMessageContent(languageStatic, universalStatic);
   

    let plData = { plContactInfo , plTitle , plHeader , plMain , plFooter , plClosingMessage };

    return (
        <main>
            <PersonalLetterGenerator plData={plData} />
        </main>
    );
}