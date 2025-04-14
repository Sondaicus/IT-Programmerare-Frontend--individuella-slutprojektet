import {fetchLanguageStatic , fetchLanguageDynamic , fetchUniversalStatic , fetchUniversalDynamic} from "@/app/ts/read-apis";
import React from "react";
import { useState } from 'react';

export default function Header()
{
    let languageStatic = fetchLanguageStatic("swedish");
    let languageDynamic = fetchLanguageDynamic("swedish");
    let universalStatic = fetchUniversalStatic();
    let universalDynamic = fetchUniversalDynamic();
    
    console.log(languageStatic);
    console.log(languageDynamic);
    console.log(universalStatic);
    console.log(universalDynamic);

    return (
        <header>
        </header>
    );
}