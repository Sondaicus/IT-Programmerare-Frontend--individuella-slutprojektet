"use client"

import { usePathname, useSearchParams , useRouter } from "next/navigation";
import React from "react";
import { getCorrectUrlPushPath , switchClassNameValues , getFullPathname, searchParamsCheckParamPresent , searchParamsGetOldKeyValue } from "@/app/ts/variable-modifying-functions";
import { useReducer } from 'react';

export default function LanguageSelect()
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let paramName : string = "chosenLanguage";
    let languageValue : string = "Välj språk";
    showcaseChosenLanguage();

    function showcaseChosenLanguage()
    {
        let collectedFullPathName : string = getFullPathname(searchParams, pathname);
        let languageValueIsPresent : boolean = searchParamsCheckParamPresent(collectedFullPathName , paramName);

        if(languageValueIsPresent)
        {
            let urlLanguageValue : string = searchParamsGetOldKeyValue(collectedFullPathName, paramName);

            if(urlLanguageValue == "swedish")
            {
                languageValue = "Svenska";
            }
            else if(urlLanguageValue == "english")
            {
                languageValue = "Engelska";
            }
        }
    }

    function selectChosenLanguage(chosenLanguage : string)
    {
           router.push(getCorrectUrlPushPath(searchParams, pathname, paramName, chosenLanguage));
    }

    function openDropdownLanguageMenu(event)
    {
        let dropdownMenu = event.srcElement;

        while(dropdownMenu.className != "dropdown-menu")
        {
            console.dir(dropdownMenu);
            dropdownMenu = dropdownMenu.parentElement;
        }

        let dropdownMenuChildren = dropdownMenu.children;

        for(let i_0 = 0; i_0 < dropdownMenuChildren.length; i_0++)
        {
            let currentDropdownMenuChild = dropdownMenuChildren[i_0];

            if(currentDropdownMenuChild.className == "dropdown-content")
            {
                let aChildren = currentDropdownMenuChild.children;

                for(let i_1 = 0; i_1 < aChildren.length; i_1++)
                {
                    let currentAChild = aChildren[i_1];
                    switchClassNameValues(currentAChild, "hidden-content", "shown-content");
                }
            }
        }
    }
    
    return (
        <div>
            <div className="dropdown-menu">
                <button className="dropdown-button" onClick={() => openDropdownLanguageMenu(event)}>{languageValue}</button>
                <div className="dropdown-content">
                    <div className="hidden-content dropdown-link" onClick={() => [selectChosenLanguage("swedish"), openDropdownLanguageMenu(event)]}>
                        <div className="dropdown-link-content">
                            <p>Svenska</p>
                        </div>
                    </div>
                    <div className="hidden-content dropdown-link" onClick={() => [selectChosenLanguage("english"), openDropdownLanguageMenu(event)]}>
                    <div className="dropdown-link-content">
                            <p>Engelska</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}