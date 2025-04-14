export function generateContactInfoContent(languageDynamic, universalStatic) 
{
    let nameParagraph : string = universalStatic.values.contact.name;
    let linkedInParagraph : string = universalStatic.values.contact.linkedIn;
    let phoneParagraph : string = languageDynamic.identifyers.contact.phone + ": " + universalStatic.values.contact.phone;
    let emailParagraph : string = languageDynamic.identifyers.contact.email + ": " + universalStatic.values.contact.email;
    let plContactInfo = { "name":nameParagraph , "linkedIn":linkedInParagraph , "phone":phoneParagraph , "email":emailParagraph }

    return plContactInfo;
}

export function generateTitleContent(languageStatic, titleName : string) 
{
    let titleParagraph : string = languageStatic.values.title + " " + titleName;
    let plTitle = { "title":titleParagraph }

    return plTitle;
}

export function generateHeaderContent(languageStatic, titleName : string) 
{
    let headerParagraph : string = languageStatic.values.header + " " + titleName + ".";
    let plHeader = { "header":headerParagraph }

    return plHeader;
}

export function generateMainContent(languageStatic, languageDynamic, universalStatic, universalDynamic, phraseKeyWords, techKeyWords) 
{
    
}

export function generateFooterContent(languageStatic, languageDynamic, parsedMentionDiploma : boolean) 
{
    let footerCareerChoices : string = languageStatic.values.footer.careerChoices;
    let includeDiploma : string = " ";
    let footerPersonalQualities : string = languageStatic.values.footer.personalQualities;

    if(parsedMentionDiploma)
    {
        includeDiploma += languageDynamic.values.footer.diploma + " ";
    }

    let footerParagraph = footerCareerChoices + includeDiploma + footerPersonalQualities;
    let plFooter = { "footer":footerParagraph };

    return plFooter;
}

export function generateClosingMessageContent(languageStatic, universalStatic) 
{
    let anticipationParagraph : string = languageStatic.values.closingMessage.anticipation;
    let regardsParagraph  : string = languageStatic.values.closingMessage.regards;
    let nameParagraph  : string = universalStatic.values.contact.name;

    let plClosingMessage = { "anticipation":anticipationParagraph , "regards":regardsParagraph , "name":nameParagraph }

    return plClosingMessage;
}