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

export function unwrapObject(wrappedObject, wrappNames : string[])
{
    let unwrappedObject = wrappedObject;
    let lastCheckTick = 0;

    while(lastCheckTick < wrappNames.length)
    {
        for(let i_0 = 0; i_0 < wrappNames.length; i_0++)
        {
            let latestWrapper = unwrappedObject[wrappNames[i_0]];

            if(latestWrapper != undefined)
            {
                lastCheckTick = 0
                unwrappedObject = latestWrapper;
                break;
            }
            else
            {
                lastCheckTick += 1;
            }
        }
    }

    return unwrappedObject;
}

export function booleanifyStringContent(stringValue : string)
{
    let booleanValue : boolean;
    
    if(stringValue == "true")
    {
        booleanValue = true;
    }
    else if(stringValue == "false")
    {
        booleanValue = false;
    }

    if(booleanValue == true || booleanValue == false)
    {
        return booleanValue;
    }
}

export function searchParamsCheckParamPresent(collectedFullPathName : string, paramName : string)
{
    let paramPresent : boolean = false;
    let paramNameIdentifyer : string = paramName + "=";
    let paramNameIdentifyerIndex : number = collectedFullPathName.indexOf(paramNameIdentifyer);

    if(paramNameIdentifyerIndex != -1)
    {
        paramPresent = true; 
    }

    return paramPresent;
}

export function searchParamsGetOldKeyValue(collectedFullPathName : string, paramName : string)
{
    let paramNameIdentifyer : string = paramName + "=";
    let paramNameIdentifyerIndex : number = collectedFullPathName.indexOf(paramNameIdentifyer);
    let paramNameUrlIndexEnd : number = collectedFullPathName.substring(paramNameIdentifyerIndex).indexOf("&");

    if(paramNameUrlIndexEnd == -1)
    {
        paramNameUrlIndexEnd = collectedFullPathName.length;
    }

    let oldKeyValue : string = collectedFullPathName.substring((paramNameIdentifyerIndex + paramNameIdentifyer.length), paramNameUrlIndexEnd);

    return oldKeyValue;
}

export function getFullPathname(searchParams, pathname)
{
    let returnValue : string;
    let searchParamsString : string = searchParams.toString();

    if(pathname == "/")
    {
        pathname += "?";
    }

    returnValue = pathname + searchParamsString;

    return returnValue;
}

export function searchParamsUrlAction(searchParams, collectedFullPathName : string, paramName : string, keyValue : string)
{
    let paramNameIdentifyer : string = paramName + "=";
    let paramNameIdentifyerIndex : number = collectedFullPathName.indexOf(paramNameIdentifyer);
    let paramNameUrlIndexEnd : number = collectedFullPathName.length;
    let keyValueUrlStandard = paramNameIdentifyer + keyValue;

    let returnStringValue : string = collectedFullPathName + paramNameIdentifyer + keyValue;

    if(paramNameIdentifyerIndex != -1)
    {
        paramNameUrlIndexEnd = collectedFullPathName.substring(paramNameIdentifyerIndex).indexOf("&");

        if(paramNameUrlIndexEnd == -1)
        {
            paramNameUrlIndexEnd = collectedFullPathName.length;
        }
    }

    if(searchParams.size > 0)
    {
        if(paramNameIdentifyerIndex == -1)
        {
            returnStringValue = collectedFullPathName + "&" + keyValueUrlStandard;
        }
        else
        {
            let oldKeyValue : string = collectedFullPathName.substring((paramNameIdentifyerIndex + paramNameIdentifyer.length), paramNameUrlIndexEnd);

            if(oldKeyValue != keyValue)
            {
                let newSearchParamsString_1 : string = collectedFullPathName.substring(0, paramNameIdentifyerIndex);
                let newSearchParamsString_2 : string = collectedFullPathName.substring((newSearchParamsString_1.length + paramNameUrlIndexEnd), collectedFullPathName.length);

                returnStringValue = newSearchParamsString_1 + paramNameIdentifyer + keyValue + newSearchParamsString_2;
            }
            else
            {
                returnStringValue = collectedFullPathName;
            }
        }
    }

    return returnStringValue;
}

export function getCorrectUrlPushPath(searchParams, pathname : string, paramName : string, keyValue : string)
{
    let collectedFullPathName : string = getFullPathname(searchParams, pathname);
    let collectedSearchParamsUrlAction : string = searchParamsUrlAction(searchParams, collectedFullPathName, paramName, keyValue);

    return collectedSearchParamsUrlAction;
}

export function switchClassNameValues(documentObjectNode, dominantClassName : string, secondairyClassName : string)
{
    let documentObjectNode_className : string = documentObjectNode.className;
    documentObjectNode_className = documentObjectNode_className.trim();
    dominantClassName = dominantClassName.trim();
    let finalClassName : string = dominantClassName;

    if(documentObjectNode_className.length > 0)
    {
        secondairyClassName = secondairyClassName.trim();
        let content_dominantClassName_index : number = documentObjectNode_className.indexOf(dominantClassName);
        let content_secondairyClassName_index : number = documentObjectNode_className.indexOf(secondairyClassName);

        if(content_dominantClassName_index != 1 && content_secondairyClassName_index == -1)
        {
            finalClassName = checkForInsideStringReplacement(documentObjectNode_className, dominantClassName, content_dominantClassName_index, secondairyClassName);
        }
        else if(content_secondairyClassName_index != 1 && content_dominantClassName_index == -1)
        {
            finalClassName = checkForInsideStringReplacement(documentObjectNode_className, secondairyClassName, content_secondairyClassName_index, dominantClassName);
        }
        else if(content_secondairyClassName_index != 1 && content_dominantClassName_index != -1)
        {
            documentObjectNode_className = fullyDeleteStringContentReference(documentObjectNode_className, dominantClassName, true, false);
            documentObjectNode_className = fullyDeleteStringContentReference(documentObjectNode_className, secondairyClassName, true, false);
            documentObjectNode_className = documentObjectNode_className.trim();
            
            finalClassName = documentObjectNode_className + " " + dominantClassName;
        }
        else
        {
            finalClassName = documentObjectNode_className + " " + dominantClassName;
        }
    }

    documentObjectNode.className = finalClassName;
}

export function checkForInsideStringReplacement(stringReplacement_recipiant : string, stringReplacement_1_value : string, stringReplacement_1_index : number, stringReplacement_value_2 : string)
{
    let stringReplacement_newValue : string = stringReplacement_value_2;
    
    let stringReplacement_comparitor : string = stringReplacement_recipiant.substring(stringReplacement_1_index, stringReplacement_1_value.length);

    if(stringReplacement_recipiant != stringReplacement_comparitor)
    {
        let stringReplacement_split_1 : string = stringReplacement_recipiant.substring(0, stringReplacement_1_index);
        let stringReplacement_split_2 : string = stringReplacement_recipiant.substring((stringReplacement_1_index + stringReplacement_1_value.length), stringReplacement_recipiant.length);
        stringReplacement_newValue = stringReplacement_split_1 + stringReplacement_value_2 + stringReplacement_split_2;
    }

    return stringReplacement_newValue;
}

export function fullyDeleteStringContentReference(stringMainContent : string, stringDeleteReference : string, trimSubstring_1 : boolean, trimSubstring_2 : boolean)
{
    let stringDeleteReference_index : number = stringMainContent.indexOf(stringDeleteReference);
    
    while(stringDeleteReference_index != -1)
    {
        let stringMainContent_substring_1 : string = stringMainContent.substring(0, stringDeleteReference_index);
        let stringMainContent_substring_2 : string = stringMainContent.substring((stringDeleteReference_index + stringDeleteReference.length), + stringMainContent.length);

        if(trimSubstring_1)
        {
            stringMainContent_substring_1 = stringMainContent_substring_1.trim();
        }
        if(trimSubstring_2)
        {
            stringMainContent_substring_2 = stringMainContent_substring_2.trim();
        }

        stringMainContent = stringMainContent_substring_1 + stringMainContent_substring_2;

        stringDeleteReference_index = stringMainContent.indexOf(stringDeleteReference);
    }

    return stringMainContent;
}