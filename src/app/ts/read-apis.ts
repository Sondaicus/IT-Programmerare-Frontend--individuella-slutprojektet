import fs from 'fs';
import { getProperFilePathInScript , jsonifyStringContent } from '@/app/ts/variable-modifying-functions';

export function fetchLanguageStatic(languageHref : string) 
{
    let projectFilePath = "app/json/" + languageHref + "/static-texts.json";
    let realFilePath = getProperFilePathInScript(projectFilePath);
    let jsonContent = getApiPathContent(realFilePath);

    return jsonContent;
}

export function fetchLanguageDynamic(languageHref : string) 
{
    let projectFilePath = "app/json/" + languageHref + "/dynamic-texts.json";
    let realFilePath = getProperFilePathInScript(projectFilePath);
    let jsonContent = getApiPathContent(realFilePath);

    return jsonContent;
}

export function fetchUniversalStatic() 
{
    let projectFilePath = "/app/json/universal/static-texts.json";
    let realFilePath = getProperFilePathInScript(projectFilePath);
    let jsonContent = getApiPathContent(realFilePath);

    return jsonContent;
}

export function fetchUniversalDynamic() 
{
    let projectFilePath = "app/json/universal/dynamic-texts.json";
    let realFilePath = getProperFilePathInScript(projectFilePath);
    let jsonContent = getApiPathContent(realFilePath);

    return jsonContent;
}

export function getApiPathContent(apiPath : string)
{
    let apiPathContentString = fs.readFileSync(apiPath, 'utf8');
    let apiPathContentJson = jsonifyStringContent(apiPathContentString);

    return apiPathContentJson;
}