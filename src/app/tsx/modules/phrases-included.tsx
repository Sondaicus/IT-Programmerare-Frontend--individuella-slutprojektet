"use client"

import { usePathname, useSearchParams , useRouter } from "next/navigation";
import React from "react";
import { getCorrectUrlPushPath , switchClassNameValues , getFullPathname, searchParamsCheckParamPresent , searchParamsGetOldKeyValue } from "@/app/ts/variable-modifying-functions";
import { useReducer } from 'react';

export default function PhrasesIncluded()
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let paramName : string = "phraseKeyWords";

    

    let fff : string[] = ["aaa" , "bbb" , "ccc"];


  
    return (
        <div></div>
    );
    
}