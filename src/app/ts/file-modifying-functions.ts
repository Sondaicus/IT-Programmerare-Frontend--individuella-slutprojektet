import path from 'path';

export function getProperFilePathInScript(filePath : string) 
{
    let properPath = path.join(__filename, "..\\..\\..\\..\\..\\src\\" + filePath);
    return properPath;
}

export function jsonifyStringContent(stringContent : string)
{
    let jsonContent = JSON.parse(stringContent);
    return jsonContent;
}