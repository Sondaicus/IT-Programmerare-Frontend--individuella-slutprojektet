"use client"

import { usePathname, useSearchParams , useRouter } from "next/navigation";
import React from "react";
import { booleanifyStringContent , getCorrectUrlPushPath , getFullPathname } from "@/app/ts/variable-modifying-functions";

export default function MentionDiploma()
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let paramName = "mentionDiploma";

    let mentionDiploma : string = searchParams.get(paramName);
    let diplomaBoolean : boolean =  booleanifyStringContent(mentionDiploma);

    if(diplomaBoolean == true)
    {
        diplomaBoolean = false;
    }
    else if(diplomaBoolean == false)
    {
        diplomaBoolean = true;
    }
    else
    {
        diplomaBoolean = true;
    }

    let diploma = "" + diplomaBoolean;

    return (
        <div className="user-input-field">
            <button 
                className="checkbox-button"
                onClick={() => 
                {
                    router.push(getCorrectUrlPushPath(searchParams, pathname, paramName, diploma));
                }}
            >
                <p>Nämn examensbevis</p>
                <input type="checkbox" checked={!diplomaBoolean} />
            </button>
        </div>
    );
}