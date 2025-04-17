"use client"

import React from "react";
import HeaderLeftSide from "@/app/tsx/modules/header-left-side";
import HeaderRightSide from "@/app/tsx/modules/header-right-side";

export default function Header()
{

    return (
        <header>
            <section className="header-section-content-field">
                <HeaderLeftSide />
                <HeaderRightSide />
            </section>
        </header>
    );
}