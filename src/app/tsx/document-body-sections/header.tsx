"use client"

import {fetchLanguageStatic , fetchLanguageDynamic , fetchUniversalStatic , fetchUniversalDynamic} from "@/app/ts/read-apis";
import { usePathname, useSearchParams , useRouter } from "next/navigation";
import * as router from "next/router";
import React from "react";


export default function Header()
{
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    

    return (
        <header>
            <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + "language=swedish")
        }}
      >
        ASC
      </button>
        </header>
    );
}